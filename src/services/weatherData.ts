export interface currentWeather {
    base: string,
    clouds: {
      all: number
    },
    cod: number,
    coord: {
      lat: number,
      lon: number
    },
    dt: number,
    id: number,
    main: {
      feels_like: number,
      humidity: number,
      pressure: number,
      temp: number,
      temp_max: number,
      temp_min: number
    },
    name: string,
    sys:{
      country: string
	    id: number
	    sunrise: number
	    sunset: number
	    type: number
    },
    timezone: number,
    visibility: number,
    weather: Array<{
      description: string,
      icon: string,
      id: number,
      main: string
    }>,
    wind: {
      deg: number,
      gust: number, 
      speed: number
    }
  }

  export interface Forecast{
    daily: Array<{
      clouds: number,
      dew_point: number,
      dt: number,
      feels_like:{
        day:number,
        eve:number,
        morn:number,
        night:number
      },
      humidity:number,
      moon_phase:number,
      moonrise:number,
      pop:number,
      pressure:number,
      sunrise:number,
      sunset:number,
      temp:{
        day:number,
        eve:number,
        max:number,
        min:number,
        morn:number,
        night:number,
      },
      uvi:number,
      weather:Array<{
        description:string,
        icon:string,
        id:number,
        main:string,
      }>,
      wind_deg:number,
      wind_gust:number,
      wind_speed:number,
    }>,
    lat:number,
    lon:number,
    timezone:string,
    timezone_offset:number,
  }