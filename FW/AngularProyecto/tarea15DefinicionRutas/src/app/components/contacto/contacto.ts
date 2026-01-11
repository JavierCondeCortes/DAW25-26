import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {
  dato='';

  formularioContacto = new FormGroup({
    nombre: new FormControl(''),
    mail: new FormControl(''),
    mensaje: new FormControl('')
  })

  submit(){
    this.dato = 'Nombre'
  }
}
