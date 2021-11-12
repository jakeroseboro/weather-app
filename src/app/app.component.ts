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
  day1:any;
  day2:any;
  day3:any;
  day4:any;
  day5:any;
  whatToWear: string;
  whatToDo: string;

  constructor(
    public weatherSvc: WeatherService,
    public route: ActivatedRoute,
  ){};

  async ngOnInit(){
    await this.weatherSvc.getWeatherForCity('Pensacola').subscribe(
      data => {this.weatherData = data}
    )
    await this.weatherSvc.getForecast('Pensacola').subscribe(
      data => {this.day1 = data, console.log(data)}
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

  convertTime(num: number){
    const date = new Date(num *1000)
    return date.toLocaleTimeString('en-US');
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
