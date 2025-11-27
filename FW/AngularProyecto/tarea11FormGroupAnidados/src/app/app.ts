import { Component, signal } from '@angular/core';
import { ReactiveFormsModule,FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  resultado='';
  formAlumno = new FormGroup({
    dni: new FormControl,
    nombre: new FormControl,
    notas: new FormGroup({
      nota1: new FormControl,
      nota2: new FormControl,
      nota3: new FormControl,
    })
  })

  submit(){
    if(this.formAlumno.value.notas){
      if(this.formAlumno.value.notas.nota1 &&
        this.formAlumno.value.notas.nota2 &&
        this.formAlumno.value.notas.nota3){
          let nota1 = parseInt(this.formAlumno.value.notas.nota1);
          let nota2 = parseInt(this.formAlumno.value.notas.nota2);
          let nota3 = parseInt(this.formAlumno.value.notas.nota3);
          if(nota1 >=5 && nota2>=5 && nota3>=5){
            this.resultado = "alumno aprobado";
          }else{
            this.resultado = "alumno suspenso";
          }
      }
    }
  }
}
