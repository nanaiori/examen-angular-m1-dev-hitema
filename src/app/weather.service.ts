import { Injectable } from '@angular/core';
import  * as moment from 'moment';

const conditions = ['rain', 'sun', 'clouds', 'storm', 'snow'];

interface CityWeather {
  pressure?: number;
  humidity?: number;
  minTemp?: number;
  maxTemp?: number;
  temp?: number;
  condition?: string;
  windSpeed?: number;
}

export interface DailyForeCast {
  name: string;
  condition?: string;
  temp: number;
}

function getRandomCondition() {
  return conditions[Math.round(Math.random() * 4)];
}

function getRandomTemp() {
  return Math.round(Math.random() * 2000) / 100;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  main: CityWeather;
  cities: {
    [key: string]: CityWeather
  }

  constructor() {
    this.cities = {};
  }

  getWeatherState(city: string): string {
    if (!this.cities[city]) this.cities[city] = {};
    if (!this.cities[city].condition)
      this.cities[city].condition = getRandomCondition();
    return this.cities[city].condition;
  }

  getCurrentTemp(city: string): number {
    if (!this.cities[city]) this.cities[city] = {};
    if (!this.cities[city].temp)
      this.cities[city].temp = getRandomTemp();
    return this.cities[city].temp;
  }

  getMinTemp(city: string): number {
    if (!this.cities[city].minTemp)
      this.cities[city].minTemp = this.cities[city].temp - 5;
    return this.cities[city].minTemp;
  }

  getMaxTemp(city: string): number {
    if (!this.cities[city].maxTemp)
      this.cities[city].maxTemp = this.cities[city].temp + 5;
    return this.cities[city].maxTemp;
  }

  getCurrentHum(city: string): number {
    if (!this.cities[city]) this.cities[city] = {};
    if (!this.cities[city].humidity)
      this.cities[city].humidity = Math.round(Math.random() * 100);
    return this.cities[city].humidity;
  }

  getCurrentWind(city: string): number {
    if (!this.cities[city]) this.cities[city] = {};
    if (!this.cities[city].windSpeed)
      this.cities[city].windSpeed = Math.round(Math.random() * 100);
    return this.cities[city].windSpeed;
  }

  getForecast() {
    const days: DailyForeCast[] = [];
    for (let i = 0; i < 6; i++) {
      days.push({
        condition: getRandomCondition(),
        temp: getRandomTemp(),
        name: moment().add(i, 'day').format('dddd') 
      });
    }
    return days;
  }
}