import { Component, signal,ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SensorTemperature } from './sensor-temperature/sensor-temperature';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SensorTemperature],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tarea5ControlTemperatura');
    @ViewChild("casa") sensor!: SensorTemperature;
    
  
}
