import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {
  condition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  name: string;

  constructor(public weatherService: WeatherService) {
    this.name = 'Paris';
  }

  ngOnInit() {
    this.loadWeather();
  }

  loadWeather() {
    this.condition = this.weatherService.getWeatherState(this.name);
    this.currentTemp = this.weatherService.getCurrentTemp(this.name);
    this.minTemp = this.weatherService.getMinTemp(this.name );
    this.maxTemp = this.weatherService.getMaxTemp(this.name);
    
  }
  onChange(event){
    this.name = event.target.value;
    this.loadWeather();
  }

}