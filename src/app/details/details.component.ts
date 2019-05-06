import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherService, DailyForeCast } from '../weather.service';

@Component({
  selector: 'weather-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  city: string;
  state: string;
  temp: number;
  hum: number;
  wind: number;
  today: string;
  forecast: DailyForeCast[];

  constructor(public activeRouter: ActivatedRoute, public weatherService: WeatherService, private router: Router) {
  }

  goToHome()
  {
    this.router.navigateByUrl('');
  }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe((route: any) => {
      this.city = route.params.city;
      this.state = this.weatherService.getWeatherState(this.city);
      this.temp = this.weatherService.getCurrentTemp(this.city);
      this.hum = this.weatherService.getCurrentHum(this.city);
      this.wind = this.weatherService.getCurrentWind(this.city);
      this.forecast = this.weatherService.getForecast();
    });
  }
}