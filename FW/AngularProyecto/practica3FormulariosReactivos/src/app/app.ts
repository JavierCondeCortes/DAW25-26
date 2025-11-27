import { Component, signal } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  nombre="";
  email="";
  biografia='';
  genero='';
  interes='';
  experiencia='';

  usuario = new FormGroup({
    nombre: new FormControl,
    email: new FormControl,
    biografia: new FormControl,
    genero: new FormControl,
    preferencias : new FormGroup({
      intereses: new FormControl,
      experiencia: new FormControl
    })
  })

  submit(){
    if(this.usuario.value.nombre && this.usuario.value.email && 
      this.usuario.value.biografia && this.usuario.value.genero && 
      this.usuario.value.preferencias?.intereses && this.usuario.value.preferencias.intereses){

        this.nombre= this.usuario.value.nombre;
        this.email= this.usuario.value.email;
        this.genero= this.usuario.value.genero;
        this.interes= this.usuario.value.preferencias.intereses;
        this.experiencia= this.usuario.value.preferencias.experiencia;
        this.biografia=this.usuario.value.biografia;
      }
  }
}

//falta que se mantengan los datos para tener diferentes registros