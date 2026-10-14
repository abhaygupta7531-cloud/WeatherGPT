# WeatherGPT

WeatherGPT is a multilingual AI weather web application for a BCA second-year project. It supports English, Hindi, and Marathi, accepts natural-language weather questions, and displays live forecasts, smart alerts, and a five-day outlook.

## Run it

Open `index.html` in a modern browser. For best results, serve the folder using a local web server so the browser can call the free Open-Meteo weather API.

## Full-stack backend

The `backend/` folder contains a FastAPI service with weather, alert, and multilingual chat endpoints.

```text
py -m pip install -r backend/requirements.txt
py -m uvicorn backend.main:app --reload
```

Then open `http://127.0.0.1:8000/docs` for the interactive API documentation. The backend uses Open-Meteo's free forecast and geocoding APIs. It is structured so an OpenAI, Gemini, or Llama-based query engine and PostgreSQL database can be added in the next phase.

## Project modules

- Multilingual interface: English, Hindi, and Marathi
- Conversational weather assistant
- City search from a natural-language question
- Live temperature, rain, wind, and humidity data
- Smart warning cards for heat, rain, strong winds, and thunderstorms
- Five-day forecast

## Technology used

- HTML5 and CSS3
- Vanilla JavaScript
- Open-Meteo Geocoding and Forecast APIs (free, no API key)

## For your project report

This is an AI-inspired conversational interface. The current browser prototype uses natural-language intent detection and live weather APIs. In a future version, this rule-based assistant can be connected to Gemini or the OpenAI API to handle more complex queries, historical climate analysis, and speech input.
