import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, filter } from 'rxjs/operators';

export type StrictHttpResponse<T> = HttpResponse<T> & {
  readonly body: T;
}

@Injectable({ providedIn: "root" })
export class WeatherService {
  constructor(private http: HttpClient) {}

getWeatherForCity(city: string){
    let returnValue:any =null;
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=ffaeb9d6a2a7a5a97e460256526aabf5`;
    const responseData = this.http.get<Object>(path, {responseType: 'json'})
    return responseData
  }
}