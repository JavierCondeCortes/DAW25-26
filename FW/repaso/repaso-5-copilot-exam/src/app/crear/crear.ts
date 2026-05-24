import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pelicula } from '../pelicula/pelicula';

@Component({
  selector: 'app-crear',
  imports: [],
  templateUrl: './crear.html',
  styleUrl: './crear.css',
})
export class Crear {
  Formulario: FormGroup;
  
  generos:any

  constructor(private fb: FormBuilder) {
    this.Formulario = this.fb.group({
      titulo: ["", [Validators.required]],
      director: ["", [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      anio: [0, [Validators.min(0)]],
      genero: ['', [Validators.required]],
      disponible: [false]
    })
  }

  submit(peli: any) {

  }
}
