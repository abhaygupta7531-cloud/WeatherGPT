const state = {
  lang: 'en',
  unit: 'celsius',
  weather: null,
  location: { name: 'Pune', latitude: 18.5204, longitude: 73.8567 },
};

const copy = {
  en: {
    eyebrow: 'MULTILINGUAL WEATHER INTELLIGENCE', heroTitle: 'Ask weather questions <em>naturally.</em>', heroDescription: 'Your AI companion for live forecasts, rain alerts, and climate information — in English, Hindi, or Marathi.', assistantLabel: 'AI WEATHER ASSISTANT', chatHeading: 'How can I help?', onlineLabel: 'AI online', welcome: 'Hello! Ask about the forecast, rain, temperature, alerts, or climate in any city.', input: 'Ask about weather in Mumbai...', note: 'Try English, Hindi, or Marathi. Example: “कल पुणे में बारिश होगी?”', today: 'TODAY', forecastOverline: 'OUTLOOK', forecastHeading: 'Next 5 days', forecastHint: 'Live data, refreshed when you search', wind: 'Wind', humidity: 'Humidity', rain: 'Rain', noAlert: 'No weather alert', calm: 'Conditions are currently calm.', suggestions: ['Will it rain in Pune?', 'Mumbai temperature', 'Delhi weather alert'], location: 'Current weather for', loading: 'Loading your weather...', featureTitles: ['Conversational AI', 'Smart alerts', 'Climate aware'], featureText: ['Ask in the language that feels natural to you.', 'Instantly highlights rain, heat, and wind risks.', 'Turns weather data into useful, everyday guidance.'], unable: 'I could not find that city. Please try a city name such as Pune, Mumbai, Delhi, or Nagpur.', climate: 'Climate insight: {city} generally has seasonal weather patterns. For a detailed climate study, compare this live forecast with monthly rainfall and temperature records.', intro: 'Here is the latest weather for {city}: ', todayName: 'Today', tomorrow: 'Tomorrow', days: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  },
  hi: {
    eyebrow: 'बहुभाषी मौसम बुद्धिमत्ता', heroTitle: 'मौसम के सवाल <em>सहज रूप से पूछें।</em>', heroDescription: 'लाइव पूर्वानुमान, बारिश की चेतावनी और जलवायु जानकारी के लिए आपका AI साथी — हिंदी, मराठी या अंग्रेज़ी में।', assistantLabel: 'AI मौसम सहायक', chatHeading: 'मैं कैसे मदद करूँ?', onlineLabel: 'AI सक्रिय है', welcome: 'नमस्ते! किसी भी शहर के पूर्वानुमान, बारिश, तापमान, चेतावनी या जलवायु के बारे में पूछें।', input: 'मुंबई के मौसम के बारे में पूछें...', note: 'हिंदी, मराठी या अंग्रेज़ी में पूछें। उदाहरण: “कल पुणे में बारिश होगी?”', today: 'आज', forecastOverline: 'पूर्वानुमान', forecastHeading: 'अगले 5 दिन', forecastHint: 'लाइव डेटा — खोजने पर अपडेट होता है', wind: 'हवा', humidity: 'नमी', rain: 'बारिश', noAlert: 'कोई मौसम चेतावनी नहीं', calm: 'अभी मौसम की स्थिति सामान्य है।', suggestions: ['क्या पुणे में बारिश होगी?', 'मुंबई का तापमान', 'दिल्ली मौसम चेतावनी'], location: 'वर्तमान मौसम:', loading: 'मौसम लोड हो रहा है...', featureTitles: ['बातचीत वाला AI', 'स्मार्ट चेतावनी', 'जलवायु जानकारी'], featureText: ['अपनी सहज भाषा में मौसम पूछें।', 'बारिश, गर्मी और तेज़ हवा के जोखिम दिखाता है।', 'मौसम डेटा को आसान सलाह में बदलता है।'], unable: 'मुझे वह शहर नहीं मिला। कृपया पुणे, मुंबई, दिल्ली या नागपुर जैसा शहर लिखें।', climate: 'जलवायु जानकारी: {city} में मौसम आमतौर पर मौसमों के साथ बदलता है। विस्तृत जलवायु अध्ययन के लिए मासिक वर्षा और तापमान के रिकॉर्ड देखें।', intro: '{city} का ताज़ा मौसम: ', todayName: 'आज', tomorrow: 'कल', days: ['रवि', 'सोम', 'मंगल', 'बुध', 'गुरु', 'शुक्र', 'शनि']
  },
  mr: {
    eyebrow: 'बहुभाषिक हवामान माहिती', heroTitle: 'हवामानाविषयी प्रश्न <em>सहज विचारा.</em>', heroDescription: 'थेट अंदाज, पावसाचे इशारे आणि हवामानविषयक माहितीसाठी तुमचा AI साथी — मराठी, हिंदी किंवा इंग्रजीमध्ये.', assistantLabel: 'AI हवामान सहायक', chatHeading: 'मी कशी मदत करू?', onlineLabel: 'AI सक्रिय आहे', welcome: 'नमस्कार! कोणत्याही शहरातील अंदाज, पाऊस, तापमान, इशारे किंवा हवामानाविषयी विचारा.', input: 'मुंबईच्या हवामानाबद्दल विचारा...', note: 'मराठी, हिंदी किंवा इंग्रजीमध्ये विचारा. उदाहरण: “उद्या पुण्यात पाऊस पडेल का?”', today: 'आज', forecastOverline: 'पुढील अंदाज', forecastHeading: 'पुढील 5 दिवस', forecastHint: 'थेट माहिती — शोधल्यावर ताजी होते', wind: 'वारा', humidity: 'आर्द्रता', rain: 'पाऊस', noAlert: 'हवामानाचा इशारा नाही', calm: 'सध्या हवामानाची स्थिती शांत आहे.', suggestions: ['पुण्यात पाऊस पडेल का?', 'मुंबईचे तापमान', 'दिल्ली हवामान इशारा'], location: 'सध्याचे हवामान:', loading: 'हवामान लोड होत आहे...', featureTitles: ['संवादी AI', 'स्मार्ट इशारे', 'हवामान जाणीव'], featureText: ['तुमच्या सहज भाषेत हवामान विचारा.', 'पाऊस, उष्णता आणि वाऱ्याचे धोके लगेच दाखवतो.', 'हवामानाची माहिती उपयुक्त सल्ल्यात बदलतो.'], unable: 'मला ते शहर सापडले नाही. कृपया पुणे, मुंबई, दिल्ली किंवा नागपूर असे शहर लिहा.', climate: 'हवामान माहिती: {city} मध्ये ऋतूंनुसार हवामान बदलते. सविस्तर अभ्यासासाठी मासिक पाऊस आणि तापमान नोंदी पहा.', intro: '{city} चे ताजे हवामान: ', todayName: 'आज', tomorrow: 'उद्या', days: ['रवि', 'सोम', 'मंगळ', 'बुध', 'गुरु', 'शुक्र', 'शनि']
  }
};

const weatherCodes = {
  0: ['Clear sky', '☀'], 1: ['Mainly clear', '🌤'], 2: ['Partly cloudy', '⛅'], 3: ['Overcast', '☁'],
  45: ['Foggy', '🌫'], 48: ['Foggy', '🌫'], 51: ['Light drizzle', '🌦'], 53: ['Drizzle', '🌦'], 55: ['Heavy drizzle', '🌧'],
  61: ['Light rain', '🌦'], 63: ['Rain', '🌧'], 65: ['Heavy rain', '🌧'], 71: ['Light snow', '🌨'], 73: ['Snow', '🌨'], 75: ['Heavy snow', '❄'],
  80: ['Rain showers', '🌦'], 81: ['Rain showers', '🌧'], 82: ['Heavy showers', '🌧'], 95: ['Thunderstorm', '⛈'], 96: ['Thunderstorm', '⛈'], 99: ['Thunderstorm', '⛈']
};

const cityAliases = {
  'मुंबई': 'Mumbai', 'पुणे': 'Pune', 'दिल्ली': 'Delhi', 'नागपुर': 'Nagpur', 'नागपूर': 'Nagpur', 'नाशिक': 'Nashik', 'ठाणे': 'Thane', 'कोल्हापुर': 'Kolhapur', 'कोल्हापूर': 'Kolhapur', 'बेंगलुरु': 'Bengaluru', 'बंगलौर': 'Bengaluru', 'चेन्नई': 'Chennai', 'हैदराबाद': 'Hyderabad', 'कोलकाता': 'Kolkata', 'जयपुर': 'Jaipur', 'लखनऊ': 'Lucknow', 'न्यू यॉर्क': 'New York'
};

const el = id => document.getElementById(id);
const t = () => copy[state.lang];
const number = value => Math.round(value);
const temp = c => state.unit === 'celsius' ? number(c) : number((c * 9 / 5) + 32);
const degree = () => state.unit === 'celsius' ? '°C' : '°F';

function setText(id, text) { el(id).textContent = text; }
function setHtml(id, html) { el(id).innerHTML = html; }

function localizeUI() {
  const c = t();
  setText('eyebrow', c.eyebrow); setHtml('heroTitle', c.heroTitle); setText('heroDescription', c.heroDescription);
  setText('assistantLabel', c.assistantLabel); setText('chatHeading', c.chatHeading); setText('onlineLabel', c.onlineLabel);
  el('chatInput').placeholder = c.input; setText('chatNote', c.note); setText('todayLabel', c.today);
  setText('forecastOverline', c.forecastOverline); setText('forecastHeading', c.forecastHeading); setText('forecastHint', c.forecastHint);
  setText('windLabel', c.wind); setText('humidityLabel', c.humidity); setText('rainLabel', c.rain);
  setText('featureOneTitle', c.featureTitles[0]); setText('featureOneText', c.featureText[0]);
  setText('featureTwoTitle', c.featureTitles[1]); setText('featureTwoText', c.featureText[1]);
  setText('featureThreeTitle', c.featureTitles[2]); setText('featureThreeText', c.featureText[2]);
  document.querySelectorAll('.lang-button').forEach(button => button.classList.toggle('active', button.dataset.lang === state.lang));
  renderSuggestions(); renderWeather();
}

function renderSuggestions() {
  el('suggestions').innerHTML = t().suggestions.map(question => `<button class="suggestion" type="button">${question}</button>`).join('');
  document.querySelectorAll('.suggestion').forEach(button => button.addEventListener('click', () => submitQuestion(button.textContent)));
}

function weatherDetails(code) { return weatherCodes[code] || ['Variable weather', '🌤']; }
function dateText() { return new Intl.DateTimeFormat(state.lang === 'mr' ? 'mr-IN' : state.lang === 'hi' ? 'hi-IN' : 'en-IN', { weekday: 'long', day: 'numeric', month: 'short' }).format(new Date()); }
function dayName(iso, position) { if (position === 0) return t().todayName; if (position === 1) return t().tomorrow; return t().days[new Date(`${iso}T12:00:00`).getDay()]; }

function alertStatus(w) {
  const current = w.current;
  const tomorrowRain = w.daily.precipitation_probability_max?.[1] || 0;
  const gust = current.wind_gusts_10m || current.wind_speed_10m;
  if (current.weather_code >= 95) return { type: 'danger', icon: '!', title: state.lang === 'en' ? 'Thunderstorm alert' : state.lang === 'hi' ? 'तूफान की चेतावनी' : 'वादळाचा इशारा', text: state.lang === 'en' ? 'Avoid open areas and follow local safety advice.' : state.lang === 'hi' ? 'खुले स्थानों से बचें और स्थानीय सलाह मानें।' : 'मोकळ्या जागा टाळा आणि स्थानिक सूचना पाळा.' };
  if (w.daily.temperature_2m_max[0] >= 39) return { type: 'warning', icon: '!', title: state.lang === 'en' ? 'Heat alert' : state.lang === 'hi' ? 'गर्मी की चेतावनी' : 'उष्णतेचा इशारा', text: state.lang === 'en' ? 'Stay hydrated and avoid midday sun.' : state.lang === 'hi' ? 'पानी पिएं और दोपहर की धूप से बचें।' : 'भरपूर पाणी प्या आणि दुपारचे ऊन टाळा.' };
  if (tomorrowRain >= 60 || current.precipitation > 2) return { type: 'warning', icon: '☂', title: state.lang === 'en' ? 'Rain likely' : state.lang === 'hi' ? 'बारिश की संभावना' : 'पावसाची शक्यता', text: state.lang === 'en' ? 'Keep an umbrella handy for outdoor plans.' : state.lang === 'hi' ? 'बाहर जाते समय छाता साथ रखें।' : 'बाहेर पडताना छत्री जवळ ठेवा.' };
  if (gust > 45) return { type: 'warning', icon: '!', title: state.lang === 'en' ? 'Strong winds' : state.lang === 'hi' ? 'तेज़ हवाएं' : 'जोराचा वारा', text: state.lang === 'en' ? 'Take care while travelling outdoors.' : state.lang === 'hi' ? 'बाहर यात्रा करते समय सावधान रहें।' : 'बाहेर प्रवास करताना काळजी घ्या.' };
  return { type: 'safe', icon: '✓', title: t().noAlert, text: t().calm };
}

function renderWeather() {
  const w = state.weather;
  const c = t();
  setText('unitToggle', state.unit === 'celsius' ? '°C' : '°F'); setText('degreeUnit', degree());
  if (!w) { setText('locationLabel', c.loading); return; }
  const [condition, icon] = weatherDetails(w.current.weather_code);
  const rainfall = w.daily.precipitation_sum[0] || 0;
  const tempText = temp(w.current.temperature_2m);
  setText('locationLabel', `${c.location} ${state.location.name}`); setText('cityName', state.location.name); setText('dateLabel', dateText());
  setText('conditionIcon', icon); setText('heroWeatherIcon', icon); setText('heroTemperature', `${tempText}°`); setText('heroCondition', condition);
  setText('temperature', tempText); setText('weatherSummary', `${condition} · ${number(w.daily.temperature_2m_max[0])}° / ${number(w.daily.temperature_2m_min[0])}°`);
  setText('windValue', `${number(w.current.wind_speed_10m)} km/h`); setText('humidityValue', `${number(w.current.relative_humidity_2m)}%`); setText('rainValue', `${rainfall.toFixed(1)} mm`);
  const alert = alertStatus(w); const card = el('alertCard'); card.className = `alert-card ${alert.type}`; setText('alertIcon', alert.icon); setText('alertTitle', alert.title); setText('alertText', alert.text);
  el('forecastList').innerHTML = w.daily.time.slice(0, 5).map((date, i) => {
    const [, forecastIcon] = weatherDetails(w.daily.weather_code[i]);
    return `<article class="forecast-item"><p>${dayName(date, i)}</p><span class="day-icon">${forecastIcon}</span><strong>${temp(w.daily.temperature_2m_max[i])}° <small>${temp(w.daily.temperature_2m_min[i])}°</small></strong><small>☂ ${w.daily.precipitation_probability_max[i] || 0}%</small></article>`;
  }).join('');
}

function addMessage(text, kind = 'assistant') {
  const template = el(kind === 'assistant' ? 'assistantMessageTemplate' : 'userMessageTemplate');
  const node = template.content.cloneNode(true); node.querySelector('.bubble').textContent = text; el('chatFeed').appendChild(node); el('chatFeed').scrollTop = el('chatFeed').scrollHeight;
}

function showTyping() {
  const node = document.createElement('div'); node.className = 'message assistant-message'; node.id = 'typingIndicator'; node.innerHTML = '<span class="avatar">☼</span><div class="bubble typing"><i></i><i></i><i></i></div>'; el('chatFeed').appendChild(node); el('chatFeed').scrollTop = el('chatFeed').scrollHeight;
}

function parseCity(question) {
  const alias = Object.keys(cityAliases).find(name => question.includes(name));
  if (alias) return cityAliases[alias];
  const matches = question.match(/(?:in|for|at|near|weather in|forecast for|में|का|के|की|मध्ये|मधील|चा|चे|ची)\s+([a-zA-Z][a-zA-Z\s-]{1,30})/i);
  if (matches) return matches[1].trim().replace(/\b(today|tomorrow|weather|forecast|rain|temperature|alert|please)\b/gi, '').trim();
  const known = ['Mumbai', 'Pune', 'Delhi', 'Nagpur', 'Nashik', 'Thane', 'Kolhapur', 'Bengaluru', 'Chennai', 'Hyderabad', 'Kolkata', 'Jaipur', 'Lucknow', 'Ahmedabad', 'Goa'];
  return known.find(city => new RegExp(`\\b${city}\\b`, 'i').test(question)) || null;
}

async function findLocation(name) {
  const response = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(name)}&count=1&language=en&format=json`);
  if (!response.ok) throw new Error('Location lookup failed'); const data = await response.json();
  if (!data.results?.[0]) throw new Error('No location'); const place = data.results[0];
  return { name: place.name + (place.admin1 ? `, ${place.admin1}` : ''), latitude: place.latitude, longitude: place.longitude };
}

async function loadWeather(location = state.location) {
  const params = new URLSearchParams({ latitude: location.latitude, longitude: location.longitude, current: 'temperature_2m,relative_humidity_2m,precipitation,weather_code,wind_speed_10m,wind_gusts_10m', daily: 'weather_code,temperature_2m_max,temperature_2m_min,precipitation_sum,precipitation_probability_max', timezone: 'auto', forecast_days: '5' });
  const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`);
  if (!response.ok) throw new Error('Weather service unavailable'); state.weather = await response.json(); state.location = location; renderWeather();
}

function replyFor(question) {
  const c = t(); const lower = question.toLowerCase();
  if (/climate|जलवायु|हवामान माहिती|हवामानाबद्दल/.test(lower)) return c.climate.replace('{city}', state.location.name);
  const w = state.weather; const [condition] = weatherDetails(w.current.weather_code); const rain = w.daily.precipitation_probability_max[0] || 0; const rainWord = state.lang === 'en' ? `${rain}% chance of rain` : state.lang === 'hi' ? `बारिश की संभावना ${rain}% है` : `पावसाची शक्यता ${rain}% आहे`;
  const body = `${condition}, ${temp(w.current.temperature_2m)}${degree()}, ${rainWord}.`;
  if (/rain|बारिश|पाऊस/.test(lower)) return state.lang === 'en' ? `For ${state.location.name}, ${body} ${rain >= 50 ? 'Carry an umbrella.' : 'Outdoor plans look reasonable.'}` : state.lang === 'hi' ? `${state.location.name} में ${body} ${rain >= 50 ? 'छाता साथ रखें।' : 'बाहर की योजना ठीक लगती है।'}` : `${state.location.name} मध्ये ${body} ${rain >= 50 ? 'छत्री जवळ ठेवा.' : 'बाहेरची योजना ठीक आहे.'}`;
  if (/alert|चेतावनी|इशारा/.test(lower)) { const a = alertStatus(w); return `${a.title}: ${a.text}`; }
  return `${c.intro.replace('{city}', state.location.name)}${body}`;
}

async function submitQuestion(question) {
  if (!question.trim()) return;
  addMessage(question, 'user'); el('chatInput').value = ''; el('sendButton').disabled = true; showTyping();
  try {
    const city = parseCity(question);
    if (city) { const loc = await findLocation(city); await loadWeather(loc); }
    if (!state.weather) await loadWeather();
    document.getElementById('typingIndicator')?.remove(); addMessage(replyFor(question));
  } catch (error) { document.getElementById('typingIndicator')?.remove(); addMessage(t().unable); }
  el('sendButton').disabled = false;
}

document.querySelectorAll('.lang-button').forEach(button => button.addEventListener('click', () => { state.lang = button.dataset.lang; localizeUI(); }));
el('unitToggle').addEventListener('click', () => { state.unit = state.unit === 'celsius' ? 'fahrenheit' : 'celsius'; renderWeather(); });
el('chatForm').addEventListener('submit', event => { event.preventDefault(); submitQuestion(el('chatInput').value); });

async function initialize() {
  localizeUI();
  try {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async pos => { try { await loadWeather({ name: 'Your location', latitude: pos.coords.latitude, longitude: pos.coords.longitude }); } catch { await loadWeather(); } }, () => loadWeather(), { timeout: 5000 });
    } else await loadWeather();
  } catch { setText('locationLabel', 'Weather data is unavailable right now.'); }
}
initialize();
