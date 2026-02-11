import { Component, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { max, pairs } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  resultado ='';

  RegistroEventosForm = new FormGroup({
    Titulo: new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(50)]),
    Descripcion: new FormControl('',[Validators.required,Validators.minLength(10),Validators.maxLength(500)]),
    Fecha: new FormControl('',[Validators.required]),
    Aforo:new FormControl ('',[Validators.required,Validators.min(1),Validators.max(500)]),
    Pais: new FormControl('',[Validators.required]),
    Gratuito:new FormControl,
    Categoria: new FormControl,
    Ciudad: new FormControl ('',[Validators.required]),
    Modalidad:new FormControl ('',[Validators.required]),
    Nombre:new FormControl ('',[Validators.required,Validators.minLength(3)]),
    Email:new FormControl ('',[Validators.required,Validators.email]),
    Telefono: new FormControl('',[Validators.required]),//personalizada
    Terminos:new FormControl ('',[Validators.required]),

  })

  submit(){
        if (this.RegistroEventosForm.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}
