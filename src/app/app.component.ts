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
  isValidResponse: boolean = true;

  constructor(
    public weatherSvc: WeatherService,
    public route: ActivatedRoute,
  ){};

  async ngOnInit(){
    const response = await this.weatherSvc.getWeatherForCity('Pensacola').subscribe(
      data => {this.weatherData = data, console.log(data)}
    )
  }

  async onSearch(){
    const response = await this.weatherSvc.getWeatherForCity(this.searchResult).subscribe(
      data => {this.weatherData = data}
    )
  }

  getColor(){
    if(this.weatherData.weather[0].description === "clear sky"){
      return 'sunny'
    }
    else return 'sunny'
  }
}
