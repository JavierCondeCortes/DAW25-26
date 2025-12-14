import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  resultado='';
  formularioContacto = new FormGroup({
    nombre: new FormControl('',[Validators.required, Validators.minLength(10)]),
    email: new FormControl('',[Validators.required, Validators.email]),
    mensaje: new FormControl('',[Validators.required,Validators.maxLength(500)]),

  })

  submit(){
    if(this.formularioContacto.valid)
      this.resultado="es valido";
    else
      this.resultado='no es valido';
  }
}
