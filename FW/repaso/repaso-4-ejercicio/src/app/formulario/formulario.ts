import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Peliculas } from '../peliculas';
import { Perso } from '../perso';

@Component({
  selector: 'app-formulario',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  resultado!: string;
  formulario: FormGroup;
  constructor(private fb: FormBuilder,
              private peliculas: Peliculas) {
    this.formulario = this.fb.group({
      titulo: ['', [Validators.required]],
      director: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(50)]],
      anio: [0, [Perso.mayorCero]],
      genero: ['', [Validators.required]],
      disponible: [false]
    })
  }



  submit() {
    if (this.formulario.valid) {
      this.peliculas.añadir(this.formulario.value);
      this.resultado = "agregado a la lista"
    } else {
      this.resultado = "Hay datos invalidos en el formulario"
    }
  }
}
