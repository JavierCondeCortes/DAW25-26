import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-listado-productos',
  imports: [],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css',
})
export class ListadoProductos {

  // //ejercicio 2
  // lista = {
  //   nombre: "",
  //   precio: 0,
  //   stock: 0,
  // }

  // listaProductos =[
  //   {nombre: "silla", precio:15, stock:20},
  //   {nombre: "alfombra", precio:20, stock:9},
  //   {nombre: "trapos x10", precio:5, stock:0},
  // ]

  // //ejercicio 3
  // pulsacion = "sin pulsar";
  // @Output() detalles = new EventEmitter<string>();

  // pulsado(){
  //   this.pulsacion = "pulsado";
  //   this.detalles.emit(this.pulsacion);
  // }

  lista = { nombre: "", precio: 0, stock: 0 };

  listaProductos = [
    { nombre: "silla", precio: 15, stock: 20 },
    { nombre: "alfombra", precio: 20, stock: 9 },
    { nombre: "trapos x10", precio: 5, stock: 0 },
  ];

  pulsacion = "sin pulsar";
  @Output() detalles = new EventEmitter<string>();

  pulsado() {
    this.pulsacion = "pulsado";
    this.detalles.emit(this.pulsacion);
  }
}

