"""WeatherGPT API - BCA project backend.

Run locally:
    py -m pip install -r backend/requirements.txt
    py -m uvicorn backend.main:app --reload
"""
from __future__ import annotations

import re
from datetime import datetime, timezone
from typing import Literal

import httpx
from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI(title="WeatherGPT API", version="1.0.0", description="Multilingual weather intelligence API")
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://127.0.0.1:5500", "null"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

OPEN_METEO = "https://api.open-meteo.com/v1/forecast"
GEOCODING = "https://geocoding-api.open-meteo.com/v1/search"

WEATHER = {
    0: ("Clear sky", "☀"), 1: ("Mainly clear", "🌤"), 2: ("Partly cloudy", "⛅"),
    3: ("Overcast", "☁"), 45: ("Foggy", "🌫"), 48: ("Foggy", "🌫"),
    51: ("Light drizzle", "🌦"), 53: ("Drizzle", "🌦"), 55: ("Heavy drizzle", "🌧"),
    61: ("Light rain", "🌦"), 63: ("Rain", "🌧"), 65: ("Heavy rain", "🌧"),
    71: ("Light snow", "🌨"), 73: ("Snow", "🌨"), 75: ("Heavy snow", "❄"),
    80: ("Rain showers", "🌦"), 81: ("Rain showers", "🌧"), 82: ("Heavy showers", "🌧"),
    95: ("Thunderstorm", "⛈"), 96: ("Thunderstorm", "⛈"), 99: ("Thunderstorm", "⛈"),
}


class ChatRequest(BaseModel):
    message: str = Field(min_length=2, max_length=500)
    city: str | None = Field(default=None, max_length=100)
    language: Literal["en", "hi", "mr"] = "en"


class Location(BaseModel):
    name: str
    latitude: float
    longitude: float
    country: str | None = None


async def geocode(city: str) -> Location:
    async with httpx.AsyncClient(timeout=12) as client:
        response = await client.get(GEOCODING, params={"name": city, "count": 1, "language": "en", "format": "json"})
    response.raise_for_status()
    result = response.json().get("results", [])
    if not result:
        raise HTTPException(status_code=404, detail="City not found")
    place = result[0]
    return Location(name=place["name"], latitude=place["latitude"], longitude=place["longitude"], country=place.get("country"))


async def get_forecast(latitude: float, longitude: float) -> dict:
    params = {
        "latitude": latitude, "longitude": longitude, "timezone": "auto", "forecast_days": 5,
        "current": "temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,wind_gusts_10m",
        "daily": "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max",
    }
    async with httpx.AsyncClient(timeout=12) as client:
        response = await client.get(OPEN_METEO, params=params)
    response.raise_for_status()
    return response.json()


def create_alert(forecast: dict, language: str) -> dict:
    current, daily = forecast["current"], forecast["daily"]
    code = current["weather_code"]
    max_temp, rain = daily["temperature_2m_max"][0], daily["precipitation_probability_max"][0] or 0
    translations = {
        "en": {"safe": ("No weather alert", "Conditions are currently calm."), "heat": ("Heat alert", "Stay hydrated and avoid midday sun."), "rain": ("Rain likely", "Keep an umbrella handy for outdoor plans."), "wind": ("Strong winds", "Take care while travelling outdoors."), "storm": ("Thunderstorm alert", "Avoid open areas and follow local safety advice.")},
        "hi": {"safe": ("कोई मौसम चेतावनी नहीं", "अभी मौसम की स्थिति सामान्य है।"), "heat": ("गर्मी की चेतावनी", "पानी पिएं और दोपहर की धूप से बचें।"), "rain": ("बारिश की संभावना", "बाहर जाते समय छाता साथ रखें।"), "wind": ("तेज़ हवाएं", "बाहर यात्रा करते समय सावधान रहें।"), "storm": ("तूफान की चेतावनी", "खुले स्थानों से बचें और स्थानीय सलाह मानें।")},
        "mr": {"safe": ("हवामानाचा इशारा नाही", "सध्या हवामानाची स्थिती शांत आहे."), "heat": ("उष्णतेचा इशारा", "भरपूर पाणी प्या आणि दुपारचे ऊन टाळा."), "rain": ("पावसाची शक्यता", "बाहेर पडताना छत्री जवळ ठेवा."), "wind": ("जोराचा वारा", "बाहेर प्रवास करताना काळजी घ्या."), "storm": ("वादळाचा इशारा", "मोकळ्या जागा टाळा आणि स्थानिक सूचना पाळा.")},
    }
    kind = "storm" if code >= 95 else "heat" if max_temp >= 39 else "rain" if rain >= 60 or current["precipitation"] > 2 else "wind" if current["wind_gusts_10m"] >= 45 else "safe"
    title, advice = translations[language][kind]
    return {"severity": "danger" if kind == "storm" else "warning" if kind != "safe" else "safe", "title": title, "advice": advice}


def intent_for(message: str) -> str:
    text = message.lower()
    if re.search(r"climate|histor|जलवायु|हवामान माहिती", text):
        return "climate"
    if re.search(r"alert|warning|चेतावनी|इशारा", text):
        return "alert"
    if re.search(r"rain|बारिश|पाऊस", text):
        return "rain"
    return "forecast"


def make_answer(forecast: dict, location: Location, language: str, intent: str) -> str:
    current, daily = forecast["current"], forecast["daily"]
    condition = WEATHER.get(current["weather_code"], ("Variable weather", "🌤"))[0]
    rain = daily["precipitation_probability_max"][0] or 0
    alert = create_alert(forecast, language)
    if language == "hi":
        if intent == "climate": return f"जलवायु जानकारी: {location.name} में ऋतुओं के अनुसार तापमान और वर्षा बदलते हैं। शोध के लिए मासिक ऐतिहासिक डेटा को भी जोड़ें।"
        if intent == "alert": return f"{alert['title']}: {alert['advice']}"
        return f"{location.name} में अभी {condition} है, तापमान {round(current['temperature_2m'])}°C है और बारिश की संभावना {rain}% है।"
    if language == "mr":
        if intent == "climate": return f"हवामान माहिती: {location.name} मध्ये ऋतूंनुसार तापमान आणि पावसात बदल होतात. संशोधनासाठी मासिक ऐतिहासिक माहिती जोडा."
        if intent == "alert": return f"{alert['title']}: {alert['advice']}"
        return f"{location.name} मध्ये सध्या {condition} आहे, तापमान {round(current['temperature_2m'])}°C आहे आणि पावसाची शक्यता {rain}% आहे."
    if intent == "climate": return f"Climate insight: {location.name} has seasonal shifts in rainfall and temperature. Add monthly historical records for a research-grade trend analysis."
    if intent == "alert": return f"{alert['title']}: {alert['advice']}"
    return f"In {location.name}, it is currently {condition}, {round(current['temperature_2m'])}°C, with a {rain}% chance of rain."


@app.get("/health")
async def health() -> dict:
    return {"status": "ok", "service": "WeatherGPT API", "time": datetime.now(timezone.utc).isoformat()}


@app.get("/weather")
async def weather(city: str = Query(min_length=2, max_length=100), language: Literal["en", "hi", "mr"] = "en") -> dict:
    location = await geocode(city)
    forecast = await get_forecast(location.latitude, location.longitude)
    return {"location": location, "forecast": forecast, "alert": create_alert(forecast, language)}


@app.post("/chat")
async def chat(request: ChatRequest) -> dict:
    location = await geocode(request.city or "Pune")
    forecast = await get_forecast(location.latitude, location.longitude)
    intent = intent_for(request.message)
    return {"answer": make_answer(forecast, location, request.language, intent), "intent": intent, "location": location, "alert": create_alert(forecast, request.language), "source": "Open-Meteo"}
