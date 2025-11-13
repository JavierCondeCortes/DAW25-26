import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sensor-temperature',
  imports: [],
  templateUrl: './sensor-temperature.html',
  styleUrl: './sensor-temperature.css'
})
export class SensorTemperature {



  @Input() nombre: string = 'sensor 1';
  @Input() rango: number = 20;

  temperatura: number = 10;
  aviso: string = "";

  @Output() superoUmbral = new EventEmitter<number>();

  get superaUmbral(): boolean {
    return this.temperatura > this.rango;
  }

  ngOnInit() {
    this.actualizarAviso();
  }

  Aumento() {
    this.temperatura++;
    this.actualizarAviso();
  }

  Decremento() {
    this.temperatura--;
    this.actualizarAviso();
  }

  actualizarAviso() {
    if (this.superaUmbral) {
      this.aviso = `Superó el umbral de ${this.rango}`;
      this.superoUmbral.emit(this.temperatura);
    } else {
      this.aviso = "";
    }
  }
}