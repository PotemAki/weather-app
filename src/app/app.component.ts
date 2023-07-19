import { Component, OnInit } from '@angular/core';
import { WeatherService } from './weather.service';
import { WeatherData } from './weather.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title(title: any) {
   // throw new Error('Method not implemented.');
  }

  city: string = 'Warsaw';
 constructor (private weatherService: WeatherService) {}

  weatherData?: WeatherData
  icon = '';

  ngOnInit(): void {
    this.weatherService.getData(this.city)
    .subscribe({
        next: (response) => {
          this.weatherData = response
          this.icon = response.current.condition.icon
        }
      })
      this.city = '';
   }

  onSubmit() {
    this.weatherService.getData(this.city)
    .subscribe({
        next: (response) => {
          this.weatherData = response
          this.icon = response.current.condition.icon
        }
      })
      this.city = '';
  }
  
}
