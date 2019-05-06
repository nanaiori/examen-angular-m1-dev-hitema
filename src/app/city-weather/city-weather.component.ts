import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'city-weather',
  templateUrl: './city-weather.component.html',
  styleUrls: ['./city-weather.component.css']
})
export class CityWeatherComponent implements OnInit {
  @Input()
  condition: string;
  currentTemp: number;
  maxTemp: number;
  minTemp: number;
  name: string;

  constructor(public weatherService: WeatherService, private router: Router) {
    this.name = 'Paris';
  }

  ngOnInit() {
    this.loadWeather();
  }

  changeName(name)
  {
    this.name = name;
    this.loadWeather();
  }

  goToDetail(name){
    this.router.navigateByUrl('/details/' + name);
  }

  loadWeather() {
    this.condition = this.weatherService.getWeatherState(this.name);
    this.currentTemp = this.weatherService.getCurrentTemp(this.name);
    this.minTemp = this.weatherService.getMinTemp(this.name);
    this.maxTemp = this.weatherService.getMaxTemp(this.name);
  }

}