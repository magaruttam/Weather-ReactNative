import { View, FlatList, StyleSheet } from 'react-native';
import React from 'react';
import ForecastCard from './ForecastCard';

type HourlyForecastProps = {
  data: any;
};

const getWeatherEmoji = (code: number): string => {
  if (code === 0 || code === 1) return '☀️';
  if (code === 2) return '⛅';
  if (code === 3) return '☁️';
  if (code >= 45 && code <= 48) return '🌫️';
  if (code >= 51 && code <= 57) return '🌦️';
  if (code >= 61 && code <= 67) return '🌧️';
  if (code >= 71 && code <= 77) return '❄️';
  if (code >= 80 && code <= 82) return '🌦️';
  if (code >= 85 && code <= 86) return '❄️';
  if (code >= 95 && code <= 99) return '⛈️';
  return '☀️';
};

const formatTime = (isoString: string): string => {
  const date = new Date(isoString);
  let hours = date.getHours();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours = hours % 12 || 12;
  return `${hours}:00 ${ampm}`;
};

const HourlyForecast = ({ data }: HourlyForecastProps) => {
  if (!data || !data.hourly) return null;

  const hourlyData = data.hourly;
  const now = new Date();
  const currentHour = now.getHours();
  const currentHourIndex = hourlyData.time.findIndex((t: string) => {
    const d = new Date(t);
    return d.getHours() >= currentHour && d.getDate() === now.getDate();
  });

  const startIndex = Math.max(0, currentHourIndex);
  const next24Hours = hourlyData.time.slice(startIndex, startIndex + 24);

  const forecastItems = next24Hours.map((time: string, i: number) => {
    const idx = startIndex + i;
    const precipProb = hourlyData.precipitation_probability?.[idx] ?? 0;
    return {
      id: time,
      time: formatTime(time),
      icon: getWeatherEmoji(hourlyData.weather_code[idx]),
      temperature: `${Math.round(hourlyData.temperature_2m[idx])}°`,
      windSpeed: `${Math.round(hourlyData.wind_speed_10m[idx])} km/h`,
      precipitation: `${precipProb}%`,
    };
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={forecastItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ForecastCard
            variant="hourly"
            time={item.time}
            icon={item.icon}
            temperature={item.temperature}
            windSpeed={item.windSpeed}
            precipitation={item.precipitation}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});

export default HourlyForecast;
