import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, filter } from 'rxjs/operators';
import { currentWeather, Forecast } from "./weatherData";

export type StrictHttpResponse<T> = HttpResponse<T> & {
  readonly body: T;
}

@Injectable({ providedIn: "root" })
export class WeatherService {
  constructor(private http: HttpClient) {}

 async getWeatherForCity(city: string){
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=ffaeb9d6a2a7a5a97e460256526aabf5`;
    const responseData = await this.http.get<currentWeather>(path, {responseType: 'json'}).toPromise()
    return responseData
  }

async getForecast(lat: number, lon: number){
  //change to one call and get lat and lon from the first api call
    const path = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&units=imperial&APPID=ffaeb9d6a2a7a5a97e460256526aabf5`;
    const responseData = await this.http.get<Forecast>(path, {responseType: 'json'}).toPromise()
    return responseData
  }
}