const state = {
  lang: "en",
  unit: "celsius",
  weather: null,
  air: null,
  map: null,
  marker: null,
  location: {
    name: "Pune",
    latitude: 18.5204,
    longitude: 73.8567,
  },
};

const copy = {
  en: {
    eyebrow: "MULTILINGUAL WEATHER INTELLIGENCE",
    heroTitle: "Ask weather questions <em>naturally.</em>",
    heroDescription:
      "Your AI companion for live forecasts, rain alerts, and climate information — in English, Hindi, or Marathi.",
    assistantLabel: "AI WEATHER ASSISTANT",
    chatHeading: "How can I help?",
    onlineLabel: "AI online",
    welcome:
      "Hello! Ask about the forecast, rain, temperature, alerts, or climate in any city.",
    input: "Ask about weather in Mumbai...",
    note: "Try English, Hindi, or Marathi.",
    today: "TODAY",
    forecastOverline: "OUTLOOK",
    forecastHeading: "Next 7 days",
    forecastHint: "Live data, refreshed when you search",
    wind: "Wind",
    humidity: "Humidity",
    rain: "Rain",
    noAlert: "No weather alert",
    calm: "Conditions are currently calm.",
    suggestions: [
      "Will it rain in Pune?",
      "Mumbai temperature",
      "Delhi weather alert",
    ],
    location: "Current weather for",
    loading: "Loading your weather...",
    featureTitles: ["Conversational AI", "Smart alerts", "Climate aware"],
    featureText: [
      "Ask in the language that feels natural to you.",
      "Instantly highlights rain, heat, and wind risks.",
      "Turns weather data into useful, everyday guidance.",
    ],
    unable:
      "I could not find that city. Please try Pune, Mumbai, Delhi, or Nagpur.",
    climate:
      "Climate insight: {city} generally has seasonal weather patterns. Compare live forecasts with monthly rainfall and temperature records.",
    intro: "Here is the latest weather for {city}: ",
    todayName: "Today",
    tomorrow: "Tomorrow",
    days: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  },

  hi: {
    eyebrow: "बहुभाषी मौसम बुद्धिमत्ता",
    heroTitle: "मौसम के सवाल <em>सहज रूप से पूछें।</em>",
    heroDescription:
      "लाइव पूर्वानुमान, बारिश की चेतावनी और जलवायु जानकारी के लिए आपका AI साथी।",
    assistantLabel: "AI मौसम सहायक",
    chatHeading: "मैं कैसे मदद करूँ?",
    onlineLabel: "AI सक्रिय है",
    welcome:
      "नमस्ते! किसी भी शहर के पूर्वानुमान, बारिश, तापमान, चेतावनी या जलवायु के बारे में पूछें।",
    input: "मुंबई के मौसम के बारे में पूछें...",
    note: "हिंदी, मराठी या अंग्रेज़ी में पूछें।",
    today: "आज",
    forecastOverline: "पूर्वानुमान",
    forecastHeading: "अगले 7 दिन",
    forecastHint: "लाइव डेटा",
    wind: "हवा",
    humidity: "नमी",
    rain: "बारिश",
    noAlert: "कोई मौसम चेतावनी नहीं",
    calm: "अभी मौसम की स्थिति सामान्य है।",
    suggestions: [
      "क्या पुणे में बारिश होगी?",
      "मुंबई का तापमान",
      "दिल्ली मौसम चेतावनी",
    ],
    location: "वर्तमान मौसम:",
    loading: "मौसम लोड हो रहा है...",
    featureTitles: ["बातचीत वाला AI", "स्मार्ट चेतावनी", "जलवायु जानकारी"],
    featureText: [
      "अपनी सहज भाषा में मौसम पूछें।",
      "बारिश, गर्मी और तेज़ हवा के जोखिम दिखाता है।",
      "मौसम डेटा को आसान सलाह में बदलता है।",
    ],
    unable: "मुझे वह शहर नहीं मिला।",
    climate:
      "जलवायु जानकारी: {city} में मौसम आमतौर पर मौसमों के साथ बदलता है।",
    intro: "{city} का ताज़ा मौसम: ",
    todayName: "आज",
    tomorrow: "कल",
    days: ["रवि", "सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि"],
  },

  mr: {
    eyebrow: "बहुभाषिक हवामान माहिती",
    heroTitle: "हवामानाविषयी प्रश्न <em>सहज विचारा.</em>",
    heroDescription:
      "थेट अंदाज, पावसाचे इशारे आणि हवामानविषयक माहितीसाठी तुमचा AI साथी.",
    assistantLabel: "AI हवामान सहायक",
    chatHeading: "मी कशी मदत करू?",
    onlineLabel: "AI सक्रिय आहे",
    welcome:
      "नमस्कार! कोणत्याही शहरातील अंदाज, पाऊस, तापमान, इशारे किंवा हवामानाविषयी विचारा.",
    input: "मुंबईच्या हवामानाबद्दल विचारा...",
    note: "मराठी, हिंदी किंवा इंग्रजीमध्ये विचारा.",
    today: "आज",
    forecastOverline: "पुढील अंदाज",
    forecastHeading: "पुढील 7 दिवस",
    forecastHint: "थेट माहिती",
    wind: "वारा",
    humidity: "आर्द्रता",
    rain: "पाऊस",
    noAlert: "हवामानाचा इशारा नाही",
    calm: "सध्या हवामानाची स्थिती शांत आहे.",
    suggestions: [
      "पुण्यात पाऊस पडेल का?",
      "मुंबईचे तापमान",
      "दिल्ली हवामान इशारा",
    ],
    location: "सध्याचे हवामान:",
    loading: "हवामान लोड होत आहे...",
    featureTitles: ["संवादी AI", "स्मार्ट इशारे", "हवामान जाणीव"],
    featureText: [
      "तुमच्या सहज भाषेत हवामान विचारा.",
      "पाऊस, उष्णता आणि वाऱ्याचे धोके दाखवतो.",
      "हवामानाची माहिती उपयुक्त सल्ल्यात बदलतो.",
    ],
    unable: "मला ते शहर सापडले नाही.",
    climate:
      "हवामान माहिती: {city} मध्ये ऋतूंनुसार हवामान बदलते.",
    intro: "{city} चे ताजे हवामान: ",
    todayName: "आज",
    tomorrow: "उद्या",
    days: ["रवि", "सोम", "मंगळ", "बुध", "गुरु", "शुक्र", "शनि"],
  },
};

const extras = {
  en: {
    saved: "Saved city",
    save: "Save city",
    share: "Share report",
    safety: "Safety tips",
    air: "Air quality",
    crop: "Crop advisory",
    map: "Weather map",
    plan: "Plan safely",
    climate: "Seven-day temperature trend",
    climateHint: "Based on the live forecast",
  },

  hi: {
    saved: "शहर सेव है",
    save: "शहर सेव करें",
    share: "रिपोर्ट शेयर करें",
    safety: "सुरक्षा सुझाव",
    air: "वायु गुणवत्ता",
    crop: "फसल सलाह",
    map: "मौसम मानचित्र",
    plan: "सुरक्षित योजना",
    climate: "सात दिन का तापमान रुझान",
    climateHint: "लाइव पूर्वानुमान के आधार पर",
  },

  mr: {
    saved: "शहर जतन केले",
    save: "शहर जतन करा",
    share: "अहवाल शेअर करा",
    safety: "सुरक्षा सूचना",
    air: "हवेची गुणवत्ता",
    crop: "पीक सल्ला",
    map: "हवामान नकाशा",
    plan: "सुरक्षित नियोजन",
    climate: "सात दिवसांचा तापमान कल",
    climateHint: "थेट अंदाजावर आधारित",
  },
};

const weatherCodes = {
  0: ["Clear sky", "☀"],
  1: ["Mainly clear", "🌤"],
  2: ["Partly cloudy", "⛅"],
  3: ["Overcast", "☁"],
  45: ["Foggy", "🌫"],
  48: ["Foggy", "🌫"],
  51: ["Light drizzle", "🌦"],
  53: ["Drizzle", "🌦"],
  55: ["Heavy drizzle", "🌧"],
  61: ["Light rain", "🌦"],
  63: ["Rain", "🌧"],
  65: ["Heavy rain", "🌧"],
  71: ["Light snow", "🌨"],
  73: ["Snow", "🌨"],
  75: ["Heavy snow", "❄"],
  80: ["Rain showers", "🌦"],
  81: ["Rain showers", "🌧"],
  82: ["Heavy showers", "🌧"],
  95: ["Thunderstorm", "⛈"],
  96: ["Thunderstorm", "⛈"],
  99: ["Thunderstorm", "⛈"],
};

const cityAliases = {
  मुंबई: "Mumbai",
  पुणे: "Pune",
  दिल्ली: "Delhi",
  नागपुर: "Nagpur",
  नागपूर: "Nagpur",
  नाशिक: "Nashik",
  ठाणे: "Thane",
  कोल्हापूर: "Kolhapur",
  चेन्नई: "Chennai",
  हैदराबाद: "Hyderabad",
  कोलकाता: "Kolkata",
  जयपुर: "Jaipur",
  लखनऊ: "Lucknow",
};

const el = (id) => document.getElementById(id);
const t = () => copy[state.lang];
const number = (value) => Math.round(value);

const temp = (celsius) =>
  state.unit === "celsius"
    ? number(celsius)
    : number((celsius * 9) / 5 + 32);

const degree = () => (state.unit === "celsius" ? "°C" : "°F");

function setText(id, text) {
  el(id).textContent = text;
}

function setHtml(id, html) {
  el(id).innerHTML = html;
}

function weatherDetails(code) {
  return weatherCodes[code] || ["Variable weather", "🌤"];
}

function dayName(date, position) {
  if (position === 0) return t().todayName;
  if (position === 1) return t().tomorrow;

  return t().days[new Date(`${date}T12:00:00`).getDay()];
}

function localizeUI() {
  const c = t();
  const x = extras[state.lang];

  setText("eyebrow", c.eyebrow);
  setHtml("heroTitle", c.heroTitle);
  setText("heroDescription", c.heroDescription);
  setText("assistantLabel", c.assistantLabel);
  setText("chatHeading", c.chatHeading);
  setText("onlineLabel", c.onlineLabel);
  setText("todayLabel", c.today);
  setText("forecastOverline", c.forecastOverline);
  setText("forecastHeading", c.forecastHeading);
  setText("forecastHint", c.forecastHint);
  setText("windLabel", c.wind);
  setText("humidityLabel", c.humidity);
  setText("rainLabel", c.rain);

  el("chatInput").placeholder = c.input;

  setText("aqiHeading", x.air);
  setText("farmerHeading", x.crop);
  setText("mapHeading", x.map);
  setText("actionHeading", x.plan);
  setText("saveCityText", x.save);
  setText("shareText", x.share);
  setText("safetyText", x.safety);
  setText("climateHeading", x.climate);
  setText("climateHint", x.climateHint);

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === state.lang);
  });

  renderSuggestions();
  renderWeather();
  renderAirQuality();
  renderSavedCities();
}

function renderSuggestions() {
  el("suggestions").innerHTML = t()
    .suggestions.map(
      (question) =>
        `<button class="suggestion" type="button">${question}</button>`
    )
    .join("");

  document.querySelectorAll(".suggestion").forEach((button) => {
    button.addEventListener("click", () => submitQuestion(button.textContent));
  });
}

function alertStatus(weather) {
  const current = weather.current;
  const rainChance =
    weather.daily.precipitation_probability_max?.[1] || 0;

  if (current.weather_code >= 95) {
    return {
      type: "danger",
      icon: "!",
      title: "Thunderstorm alert",
      text: "Avoid open areas and follow local safety advice.",
    };
  }

  if (weather.daily.temperature_2m_max[0] >= 39) {
    return {
      type: "warning",
      icon: "!",
      title: "Heat alert",
      text: "Stay hydrated and avoid midday sun.",
    };
  }

  if (rainChance >= 60 || current.precipitation > 2) {
    return {
      type: "warning",
      icon: "☂",
      title: "Rain likely",
      text: "Keep an umbrella handy for outdoor plans.",
    };
  }

  if (current.wind_gusts_10m >= 45) {
    return {
      type: "warning",
      icon: "!",
      title: "Strong winds",
      text: "Take care while travelling outdoors.",
    };
  }

  return {
    type: "safe",
    icon: "✓",
    title: t().noAlert,
    text: t().calm,
  };
}

function renderWeather() {
  const weather = state.weather;

  setText("unitToggle", state.unit === "celsius" ? "°C" : "°F");
  setText("degreeUnit", degree());

  if (!weather) {
    setText("locationLabel", t().loading);
    return;
  }

  const [condition, icon] = weatherDetails(weather.current.weather_code);
  const rainfall = weather.daily.precipitation_sum[0] || 0;
  const currentTemp = temp(weather.current.temperature_2m);

  setText("locationLabel", `${t().location} ${state.location.name}`);
  setText("cityName", state.location.name);
  setText("heroWeatherIcon", icon);
  setText("conditionIcon", icon);
  setText("heroTemperature", `${currentTemp}°`);
  setText("heroCondition", condition);
  setText("temperature", currentTemp);

  setText(
    "weatherSummary",
    `${condition} · ${number(weather.daily.temperature_2m_max[0])}° / ${number(weather.daily.temperature_2m_min[0])}°`
  );

  setText(
    "windValue",
    `${number(weather.current.wind_speed_10m)} km/h`
  );

  setText(
    "humidityValue",
    `${number(weather.current.relative_humidity_2m)}%`
  );

  setText("rainValue", `${rainfall.toFixed(1)} mm`);

  const alert = alertStatus(weather);
  const card = el("alertCard");

  card.className = `alert-card ${alert.type}`;
  setText("alertIcon", alert.icon);
  setText("alertTitle", alert.title);
  setText("alertText", alert.text);

  el("forecastList").innerHTML = weather.daily.time
    .slice(0, 7)
    .map((date, index) => {
      const [, forecastIcon] = weatherDetails(
        weather.daily.weather_code[index]
      );

      return `
        <article class="forecast-item">
          <p>${dayName(date, index)}</p>
          <span class="day-icon">${forecastIcon}</span>
          <strong>
            ${temp(weather.daily.temperature_2m_max[index])}°
            <small>${temp(weather.daily.temperature_2m_min[index])}°</small>
          </strong>
          <small>☂ ${weather.daily.precipitation_probability_max[index] || 0}%</small>
        </article>
      `;
    })
    .join("");

  renderTemperatureChart();
  renderFarmerAdvice();
  updateMap();
}

function renderTemperatureChart() {
  if (!state.weather) return;

  const highs = state.weather.daily.temperature_2m_max.slice(0, 7);
  const min = Math.min(...highs);
  const max = Math.max(...highs);
  const range = Math.max(max - min, 1);

  el("temperatureChart").innerHTML = highs
    .map((value, index) => {
      const height = 35 + ((value - min) / range) * 65;

      return `
        <div class="chart-column">
          <span class="chart-value">${temp(value)}°</span>
          <i class="chart-bar" style="height:${height}%"></i>
          <span class="chart-day">
            ${dayName(state.weather.daily.time[index], index)}
          </span>
        </div>
      `;
    })
    .join("");
}

function renderFarmerAdvice() {
  if (!state.weather) return;

  const weather = state.weather;
  const rain = weather.daily.precipitation_probability_max[0] || 0;
  const high = weather.daily.temperature_2m_max[0];
  const wind = weather.current.wind_speed_10m;

  let advice = "";

  if (rain >= 60) {
    advice =
      state.lang === "hi"
        ? "बारिश की संभावना अधिक है। सिंचाई रोकें और कटाई की गई फसल को ढककर रखें।"
        : state.lang === "mr"
          ? "पावसाची शक्यता जास्त आहे. सिंचन थांबवा आणि काढलेले पीक झाकून ठेवा."
          : "Rain is likely. Pause irrigation and keep harvested crops covered.";
  } else if (high >= 36) {
    advice =
      state.lang === "hi"
        ? "गर्मी अधिक है। सुबह या शाम सिंचाई करें।"
        : state.lang === "mr"
          ? "उष्णता जास्त आहे. सकाळी किंवा संध्याकाळी सिंचन करा."
          : "High heat expected. Irrigate early or late and protect crop moisture.";
  } else if (wind >= 30) {
    advice =
      state.lang === "hi"
        ? "हवा तेज़ है। कीटनाशक का छिड़काव टालें।"
        : state.lang === "mr"
          ? "वारा जोराचा आहे. फवारणी टाळा."
          : "Strong wind expected. Avoid spraying and check supported crops.";
  } else {
    advice =
      state.lang === "hi"
        ? "मौसम सामान्य है। नियमित सिंचाई और फसल निरीक्षण के लिए अच्छा समय है।"
        : state.lang === "mr"
          ? "हवामान अनुकूल आहे. नियमित सिंचन आणि पीक पाहणीसाठी योग्य वेळ आहे."
          : "Conditions are favourable for routine irrigation and crop inspection.";
  }

  setText("farmerAdvice", advice);
}

function airCategory(aqi) {
  const x = extras[state.lang];

  if (aqi <= 50) return "Good";
  if (aqi <= 100) return "Fair";
  if (aqi <= 150) return "Moderate";
  if (aqi <= 200) return "Poor";

  return "Very poor";
}

function renderAirQuality() {
  if (!state.air) return;

  const air = state.air.current;
  const value = Math.round(air.us_aqi || 0);

  setText("aqiValue", value);
  setText("aqiLevel", airCategory(value));
  setText("pm25Value", `${Math.round(air.pm2_5 || 0)} µg/m³`);
  setText("pm10Value", `${Math.round(air.pm10 || 0)} µg/m³`);

  let message = "Air quality is comfortable for normal outdoor activity.";

  if (value > 100) {
    message =
      "Consider reducing prolonged outdoor activity, especially for sensitive groups.";
  }

  setText("aqiText", message);
}

async function loadAirQuality(location) {
  try {
    const params = new URLSearchParams({
      latitude: location.latitude,
      longitude: location.longitude,
      current: "us_aqi,pm2_5,pm10",
    });

    const response = await fetch(
      `https://air-quality-api.open-meteo.com/v1/air-quality?${params}`
    );

    if (!response.ok) throw new Error("Air quality unavailable");

    state.air = await response.json();
    renderAirQuality();
  } catch {
    setText(
      "aqiText",
      "Air-quality data is unavailable for this location right now."
    );
  }
}

function updateMap() {
  if (!window.L || !state.weather) return;

  const point = [state.location.latitude, state.location.longitude];

  if (!state.map) {
    state.map = L.map("weatherMap", {
      zoomControl: false,
      attributionControl: true,
    }).setView(point, 8);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 14,
      attribution: "© OpenStreetMap",
    }).addTo(state.map);
  }

  state.map.setView(point, 8);

  if (state.marker) {
    state.marker.remove();
  }

  state.marker = L.marker(point)
    .addTo(state.map)
    .bindPopup(
      `${state.location.name}: ${temp(state.weather.current.temperature_2m)}${degree()}`
    )
    .openPopup();

  setTimeout(() => state.map.invalidateSize(), 100);
}

function savedCities() {
  return JSON.parse(localStorage.getItem("weathergpt-cities") || "[]");
}

function renderSavedCities() {
  const cities = savedCities();

  el("savedCities").innerHTML = cities
    .map(
      (city) =>
        `<button type="button" data-city="${city}">${city}</button>`
    )
    .join("");

  el("savedCities")
    .querySelectorAll("button")
    .forEach((button) => {
      button.addEventListener("click", () => {
        submitQuestion(`Weather in ${button.dataset.city}`);
      });
    });
}

function saveCity() {
  const cities = savedCities();
  const city = state.location.name.split(",")[0];

  if (!cities.includes(city)) {
    cities.unshift(city);

    localStorage.setItem(
      "weathergpt-cities",
      JSON.stringify(cities.slice(0, 5))
    );
  }

  renderSavedCities();
  setText("saveCityText", extras[state.lang].saved);
}

function shareReport() {
  if (!state.weather) return;

  const [condition] = weatherDetails(state.weather.current.weather_code);

  const text =
    `WeatherGPT: ${state.location.name} is ${condition}, ` +
    `${temp(state.weather.current.temperature_2m)}${degree()}. ` +
    `Rain chance: ${state.weather.daily.precipitation_probability_max[0] || 0}%.`;

  window.open(
    `https://wa.me/?text=${encodeURIComponent(text)}`,
    "_blank",
    "noopener"
  );
}

function openSafetyTips() {
  const tips = [
    "During lightning or storms, stay away from open fields and trees.",
    "Avoid waterlogged roads during heavy rain.",
    "During heatwaves, drink water and avoid strong midday sun.",
  ];

  el("safetyContent").innerHTML =
    `<ul class="safety-list">` +
    tips.map((item) => `<li>${item}</li>`).join("") +
    `</ul>`;

  el("safetyDialog").showModal();
}

function addMessage(text, kind = "assistant") {
  const template = el(
    kind === "assistant"
      ? "assistantMessageTemplate"
      : "userMessageTemplate"
  );

  const node = template.content.cloneNode(true);

  node.querySelector(".bubble").textContent = text;

  el("chatFeed").appendChild(node);
  el("chatFeed").scrollTop = el("chatFeed").scrollHeight;
}

function showTyping() {
  const node = document.createElement("div");

  node.className = "message assistant-message";
  node.id = "typingIndicator";

  node.innerHTML = `
    <span class="avatar">☼</span>
    <div class="bubble typing">Thinking...</div>
  `;

  el("chatFeed").appendChild(node);
  el("chatFeed").scrollTop = el("chatFeed").scrollHeight;
}

function parseCity(question) {
  const alias = Object.keys(cityAliases).find((name) =>
    question.includes(name)
  );

  if (alias) return cityAliases[alias];

  const knownCities = [
    "Mumbai",
    "Pune",
    "Delhi",
    "Nagpur",
    "Nashik",
    "Thane",
    "Kolhapur",
    "Bengaluru",
    "Chennai",
    "Hyderabad",
    "Kolkata",
    "Jaipur",
    "Lucknow",
    "Ahmedabad",
    "Goa",
  ];

  return (
    knownCities.find((city) =>
      new RegExp(`\\b${city}\\b`, "i").test(question)
    ) || null
  );
}

async function findLocation(name) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=1&language=en&format=json`
  );

  if (!response.ok) throw new Error("Location lookup failed");

  const data = await response.json();

  if (!data.results?.[0]) throw new Error("No location");

  const place = data.results[0];

  return {
    name: place.name + (place.admin1 ? `, ${place.admin1}` : ""),
    latitude: place.latitude,
    longitude: place.longitude,
  };
}

async function loadWeather(location = state.location) {
  const params = new URLSearchParams({
    latitude: location.latitude,
    longitude: location.longitude,
    current:
      "temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,wind_gusts_10m",
    daily:
      "weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max",
    timezone: "auto",
    forecast_days: "7",
  });

  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?${params}`
  );

  if (!response.ok) throw new Error("Weather service unavailable");

  state.weather = await response.json();
  state.location = location;

  renderWeather();
  loadAirQuality(location);
}

function replyFor(question) {
  const lower = question.toLowerCase();

  if (/climate|जलवायु|हवामान/.test(lower)) {
    return t().climate.replace("{city}", state.location.name);
  }

  const weather = state.weather;
  const [condition] = weatherDetails(weather.current.weather_code);
  const rain =
    weather.daily.precipitation_probability_max[0] || 0;

  if (/rain|बारिश|पाऊस/.test(lower)) {
    return `For ${state.location.name}: ${condition}, ${temp(weather.current.temperature_2m)}${degree()}, with ${rain}% chance of rain.`;
  }

  if (/alert|चेतावनी|इशारा/.test(lower)) {
    const alert = alertStatus(weather);
    return `${alert.title}: ${alert.text}`;
  }

  return `${t().intro.replace("{city}", state.location.name)}${condition}, ${temp(weather.current.temperature_2m)}${degree()}, ${rain}% chance of rain.`;
}

async function submitQuestion(question) {
  if (!question.trim()) return;

  addMessage(question, "user");

  el("chatInput").value = "";
  el("sendButton").disabled = true;

  showTyping();

  try {
    const city = parseCity(question);

    if (city) {
      const location = await findLocation(city);
      await loadWeather(location);
    }

    if (!state.weather) {
      await loadWeather();
    }

    el("typingIndicator")?.remove();
    addMessage(replyFor(question));
  } catch {
    el("typingIndicator")?.remove();
    addMessage(t().unable);
  }

  el("sendButton").disabled = false;
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => {
    state.lang = button.dataset.lang;
    localizeUI();
  });
});

el("unitToggle").addEventListener("click", () => {
  state.unit =
    state.unit === "celsius" ? "fahrenheit" : "celsius";

  renderWeather();
});

el("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("light-theme");

  const light = document.body.classList.contains("light-theme");

  el("themeToggle").textContent = light ? "☀" : "☾";

  localStorage.setItem(
    "weathergpt-theme",
    light ? "light" : "dark"
  );
});

el("chatForm").addEventListener("submit", (event) => {
  event.preventDefault();
  submitQuestion(el("chatInput").value);
});

el("saveCityButton").addEventListener("click", saveCity);
el("shareButton").addEventListener("click", shareReport);
el("safetyButton").addEventListener("click", openSafetyTips);

el("closeSafety").addEventListener("click", () => {
  el("safetyDialog").close();
});

el("voiceButton").addEventListener("click", () => {
  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if (!SpeechRecognition) {
    addMessage(
      "Voice input is not supported in this browser. Please type your question."
    );

    return;
  }

  const recognition = new SpeechRecognition();

  recognition.lang =
    state.lang === "hi"
      ? "hi-IN"
      : state.lang === "mr"
        ? "mr-IN"
        : "en-IN";

  recognition.interimResults = false;

  el("voiceButton").classList.add("listening");

  recognition.onresult = (event) => {
    const spokenText = event.results[0][0].transcript;

    el("voiceButton").classList.remove("listening");

    submitQuestion(spokenText);
  };

  recognition.onerror = () => {
    el("voiceButton").classList.remove("listening");

    addMessage(
      "I could not hear that. Please try again or type your question."
    );
  };

  recognition.onend = () => {
    el("voiceButton").classList.remove("listening");
  };

  recognition.start();
});

async function initialize() {
  if (localStorage.getItem("weathergpt-theme") === "light") {
    document.body.classList.add("light-theme");
    el("themeToggle").textContent = "☀";
  }

  localizeUI();

  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            await loadWeather({
              name: "Your location",
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          } catch {
            await loadWeather();
          }
        },
        () => loadWeather(),
        { timeout: 5000 }
      );
    } else {
      await loadWeather();
    }
  } catch {
    setText(
      "locationLabel",
      "Weather data is unavailable right now."
    );
  }
}

initialize();