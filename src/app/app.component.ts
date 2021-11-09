import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { WeatherService } from 'src/services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'weather-app';
  searchResult: string;

  constructor(
    public weatherSvc: WeatherService,
    public route: ActivatedRoute,
  ){};

  async onSearch(){
    let ress ={}
    const result = this.weatherSvc.getWeatherForCity(this.searchResult).subscribe(res => {
      ress = res;
    }
    )
    console.log(result)
  }
}
