import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'weather-app';
  searchResult: string;
  weatherData: any;

  constructor(
    public weatherSvc: WeatherService,
    public route: ActivatedRoute,
  ){};

  ngOnInit(){
    const response = this.weatherSvc.getWeatherForCity('Pensacola').subscribe(
      data => {this.weatherData = data}
    )
  }

  async onSearch(){
    const response = this.weatherSvc.getWeatherForCity(this.searchResult).subscribe(
      data => {this.weatherData = data}
    )
  }
}
