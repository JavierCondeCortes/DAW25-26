import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Peliculas {
  constructor(){ }
  retornar(){
    return[
      {
        id: 1,
        titulo: "Velocidad Terminal",
        director: "Marco Álvarez",
        anio: 2018,
        genero: "Acción",
        disponible: true
      },
      {
        id: 2,
        titulo: "Ruta de Acero",
        director: "Lucía Serrano",
        anio: 2020,
        genero: "Aventura",
        disponible: false
      },
      {
        id: 3,
        titulo: "Nitro al Amanecer",
        director: "Héctor Valdés",
        anio: 2016,
        genero: "Acción",
        disponible: true
      },
      {
        id: 4,
        titulo: "Carrera Fantasma",
        director: "Sofía Méndez",
        anio: 2022,
        genero: "Suspenso",
        disponible: true
      },
      {
        id: 5,
        titulo: "Motor Salvaje",
        director: "Daniel Rojas",
        anio: 2015,
        genero: "Drama",
        disponible: false
      },
      {
        id: 6,
        titulo: "Asfalto Ardiente",
        director: "Paula Jiménez",
        anio: 2019,
        genero: "Acción",
        disponible: true
      },
      {
        id: 7,
        titulo: "Turbo Nocturno",
        director: "Javier Cortés",
        anio: 2021,
        genero: "Thriller",
        disponible: true
      },
      {
        id: 8,
        titulo: "La Última Curva",
        director: "Elena Navarro",
        anio: 2017,
        genero: "Drama",
        disponible: false
      },
      {
        id: 9,
        titulo: "Pista Roja",
        director: "Rodrigo Peña",
        anio: 2023,
        genero: "Acción",
        disponible: true
      },
      {
        id: 10,
        titulo: "Escape en Marcha",
        director: "Natalia Duarte",
        anio: 2014,
        genero: "Aventura",
        disponible: true
      }
    ]
  }
}
