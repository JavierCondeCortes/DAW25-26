import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  imports: [],
  templateUrl: './botones.html',
  styleUrl: './botones.css'
})
export class Botones {
  opcion = [
    { id:1, nombre: "pizza", votos: 0 },
    { id:2, nombre: "hamburguesa", votos: 0 },
    { id:3, nombre: "tacos", votos: 0 }
  ];
}

