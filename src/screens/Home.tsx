import { View, Text, StyleSheet, ActivityIndicator } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { observer } from 'mobx-react-lite'
import Header from '../components/Header'
import WeatherCard from '../components/WeatherCard'
import Highlights from '../components/Highlights'
import { weatherStore } from '../store/WeatherStore'
import BottomNav from '../components/BottomNav'

const Home = observer(() => {
  useEffect(() => {
    weatherStore.fetchWeather(weatherStore.city);
  }, []);

  return (
    <SafeAreaView style={style.container}>
      <Header title="Weather"/>
      {weatherStore.loading && !weatherStore.weather ? (
        <View style={style.center}>
          <ActivityIndicator size="large" color="#5B7CFF" />
        </View>
      ) : weatherStore.error ? (
        <View style={style.center}>
          <Text style={style.errorText}>{weatherStore.error}</Text>
        </View>
      ) : (
        <View style={{flex:1}}>
          <WeatherCard
          city={weatherStore.city}
          country={weatherStore.country}
          weather={weatherStore.weather}
        />
        </View>
      )}
        <Highlights />
      <BottomNav />
    </SafeAreaView>
  )
})

const style = StyleSheet.create({
  container: {
    backgroundColor: '#0F1227',
    paddingHorizontal: 24,
    flex: 1,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,
  },
  errorText: {
    color: '#FF6B6B',
    fontSize: 16,
    fontWeight: '500',
  }
})

export default Home