import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import ForecastCard from './ForecastCard';

type DailyForecastProps = {
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

const formatDay = (isoString: string): string => {
  const date = new Date(isoString);
  const today = new Date();
  const isToday =
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();

  if (isToday) return 'Today';

  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  return days[date.getDay()];
};

const DailyForecast = ({ data }: DailyForecastProps) => {
  if (!data || !data.daily) return null;

  const daily = data.daily;
  const days = daily.time.map((time: string, i: number) => ({
    id: time,
    day: formatDay(time),
    icon: getWeatherEmoji(daily.weather_code?.[i] ?? 0),
    precipitation: `${daily.precipitation_probability_max?.[i] ?? 0}% Chance`,
    highTemp: `${Math.round(daily.temperature_2m_max[i])}°`,
    lowTemp: `${Math.round(daily.temperature_2m_min[i])}°`,
  }));
  console.log(days)
  return (
    <View style={styles.container}>
      <FlatList
        data={days}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ForecastCard
            variant="daily"
            day={item.day}
            icon={item.icon}
            precipitation={item.precipitation}
            highTemp={item.highTemp}
            lowTemp={item.lowTemp}
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

export default DailyForecast;
