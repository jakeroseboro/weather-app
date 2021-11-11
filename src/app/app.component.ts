import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/services/weather.service';
import { currentWeather } from 'src/services/weatherData';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{
  title = 'weather-app';
  searchResult: string;
  weatherData: currentWeather;
  whatToWear: string;
  whatToDo: string;

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

  getImage(){
    return `https://openweathermap.org/img/wn/${this.weatherData.weather[0].icon}@2x.png`
  }

  getColor(){
    if(this.weatherData.weather[0].main === "Clear" && this.weatherData.sys.sunset > this.weatherData.dt){
      return 'sunny'
    }
    if(this.weatherData.weather[0].main === "Clear" && this.weatherData.sys.sunset < this.weatherData.dt){
      return 'dark'
    }
    if(this.weatherData.weather[0].main === "Clouds" && this.weatherData.sys.sunset > this.weatherData.dt){
      return 'clouds'
    }
    if(this.weatherData.weather[0].main === "Clouds" && this.weatherData.sys.sunset < this.weatherData.dt){
      this.whatToWear="Pajamas";
      this.whatToDo="Go to bed! It's too dark outside"
      return 'dark'
    }
    if(this.weatherData.weather[0].main === "Snow"){
      return 'snow'
    }
    if(this.weatherData.weather[0].main === "Rain"){
      return 'rain'
    }
    if(this.weatherData.weather[0].main === "Drizzle"){
      return 'drizzle'
    }
    if(this.weatherData.weather[0].main === "Thunderstorm"){
      return 'thunder'
    }
    else return 'sunny'
  }
}
