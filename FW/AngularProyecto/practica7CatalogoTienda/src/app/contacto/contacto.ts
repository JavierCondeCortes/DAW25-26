import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  imports: [ReactiveFormsModule],
  templateUrl: './contacto.html',
  styleUrl: './contacto.css',
})
export class Contacto {

  dato='';

  formulario = new FormGroup({
    nombre: new FormControl(''),
    mail: new FormControl(''),
    mensaje: new FormControl(''),
  })

  submit(){
    this.dato = `Nombre= ${this.formulario.value.nombre}
                  mail= ${this.formulario.value.mail}
                  mensaje= ${this.formulario.value.mensaje}`;
  }
}

