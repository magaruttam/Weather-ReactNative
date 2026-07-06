import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { observer } from 'mobx-react-lite';
import Header from '../components/Header';
import BottomNav from '../components/BottomNav';
import Tabs from '../components/ui/Tabs';
import HourlyForecast from '../components/HourlyForecast';
import DailyForecast from '../components/DailyForecast';
import { weatherStore } from '../store/WeatherStore';
import { useState } from 'react';

const Forecast = observer(() => {
  const [activeTab, setActiveTab] = useState('hourly');

  useEffect(() => {
    if (!weatherStore.weather) {
      weatherStore.fetchWeather(weatherStore.city);
    }
  }, []);

  const tabs = [
    { label: 'Hourly', value: 'hourly' },
    { label: 'Daily', value: 'daily' },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Forecast" />
      {weatherStore.error && !weatherStore.weather ? (
        <View style={styles.center}>
          <Text style={styles.errorText}>{weatherStore.error}</Text>
        </View>
      ) : !weatherStore.weather ? (
        <View style={styles.center}>
          <ActivityIndicator size="large" color="#4B7BFF" />
        </View>
      ) : (
        <View style={styles.bodySection}>
          <Tabs
            tabs={tabs}
            activeTab={activeTab}
            onChange={setActiveTab}
          />
          {activeTab === 'hourly' ? (
            <HourlyForecast data={weatherStore.weather} />
          ) : (
            <DailyForecast data={weatherStore.weather} />
          )}
        </View>
      )}
      <BottomNav />
    </SafeAreaView>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#0F1227',
    paddingHorizontal: 20,
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bodySection: {
    flex: 1,
    marginTop: 24,
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default Forecast;
