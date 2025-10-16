import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sensor-temperature',
  imports: [],
  templateUrl: './sensor-temperature.html',
  styleUrl: './sensor-temperature.css'
})
export class SensorTemperature {
  temperatura :number = 0;

  @Input()nombre :String= 'sensor 1';
  @Input()rango :number = 0;

  @Output()SuperoUmbral = this.temperatura>this.rango;
  //seguir
}
