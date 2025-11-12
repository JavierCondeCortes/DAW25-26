import { Component } from '@angular/core';

@Component({
  selector: 'app-enlaces-prioridad',
  imports: [],
  templateUrl: './enlaces-prioridad.html',
  styleUrl: './enlaces-prioridad.css',
})
export class EnlacesPrioridad {
nombre = "";

fijarNombre1(){
  this.nombre= "juan";
}
fijarNombre2(){
  this.nombre= "rosa";
}
}
