import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/services/weather.service';
import { currentWeather, Forecast } from 'src/services/weatherData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'weather-app';
  searchResult: string;
  weatherData: currentWeather;
  dailyForecast: Forecast;
  whatToWear: string;
  whatToDo: string;

  constructor(
    public weatherSvc: WeatherService,
    public route: ActivatedRoute,
  ){};

  async ngOnInit(){
    this.weatherData =await this.weatherSvc.getWeatherForCity('Pensacola')
    this.dailyForecast =await this.weatherSvc.getForecast(30.4213, -87.2169)
  }

  async onSearch(){
    this.weatherData = await this.weatherSvc.getWeatherForCity(this.searchResult)
    this.getDaily()
  }

  async getDaily(){
    this.dailyForecast = await this.weatherSvc.getForecast(this.weatherData.coord.lat,this.weatherData.coord.lon)
  }

  getImage(){
    return `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`
  }

  getForecastImage(icon: string){
    return `https://openweathermap.org/img/wn/${icon}.png`
  }

  convertTime(num: number){
    const date = new Date(num *1000)
    return date.toLocaleTimeString('en-US');
  }

  toNearestWhole(num: number){
    return Math.ceil(num);
  }

  convertToDate(num: number){
    const date = new Date(num*1000);
    return date.toLocaleString('en-us', {weekday:'long'});
  }

  toTextualDescription(degree: number){
    if (degree>337.5) return 'Northerly';
    if (degree>292.5) return 'North Westerly';
    if(degree>247.5) return 'Westerly';
    if(degree>202.5) return 'South Westerly';
    if(degree>157.5) return 'Southerly';
    if(degree>122.5) return 'South Easterly';
    if(degree>67.5) return 'Easterly';
    if(degree>22.5){return 'North Easterly';}
    return 'Northerly';
}

getColor(){
    if(this.weatherData.sys.sunset > this.weatherData.dt){
      return 'sunny'
    }
    if( this.weatherData.sys.sunset < this.weatherData.dt){
      return 'dark'
    }
    else return 'sunny'
  }
}
