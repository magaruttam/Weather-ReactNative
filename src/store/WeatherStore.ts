import { makeAutoObservable, runInAction } from 'mobx';
import { SearchLocation } from '../api/locationApi';
import { getWeather } from '../api/weatherApi';

class WeatherStore {
  city = 'Surkhet';
  country = '';
  weather: any = null;
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetchWeather(cityName: string) {
    this.loading = true;
    this.error = null;

    try {
      const locations = await SearchLocation(cityName);
      if (!locations || locations.length === 0) {
        runInAction(() => {
          this.error = 'Location not found';
          this.loading = false;
        });
        return;
      }

      const { name, country, latitude, longitude } = locations[0];
      const weatherData = await getWeather(latitude, longitude);

      runInAction(() => {
        this.city = name;
        this.country = country;
        this.weather = weatherData;
        this.loading = false;
      });
    } catch (err: any) {
      runInAction(() => {
        this.error = err?.message || 'Failed to fetch weather data';
        this.loading = false;
      });
    }
  }
}

export const weatherStore = new WeatherStore();
