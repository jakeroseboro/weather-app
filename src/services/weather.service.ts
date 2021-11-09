import { HttpClient, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, filter } from 'rxjs/operators';

@Injectable({ providedIn: "root" })
export class WeatherService {
  constructor(private http: HttpClient) {}

getWeatherForCity(city: string): Observable<any>{
    const path = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=ffaeb9d6a2a7a5a97e460256526aabf5`;

    return this.http.get(path)
  }
}