export const getWeather = async (lat: number, lon: number) => {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,apparent_temperature,weather_code&hourly=temperature_2m,weather_code,wind_speed_10m,relative_humidity_2m,precipitation_probability&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max,weather_code,sunrise,sunset&timezone=auto&forecast_days=7`
  );
  const data = await response.json();
  return data;
};