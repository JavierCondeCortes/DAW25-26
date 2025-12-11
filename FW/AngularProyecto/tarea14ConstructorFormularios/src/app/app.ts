import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, Validators,FormBuilder,FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  resultado='';
  formularioContacto: FormGroup;
    constructor(private fb: FormBuilder){
      this.formularioContacto = this.fb.group({
        nombre: ['',[Validators.required,Validators.minLength(10)]],
        email: ['',[Validators.required, Validators.email]],
        mensaje: ['',Validators.required,Validators.maxLength(500)]
      })
    }

    submit(){
      if(this.formularioContacto.valid)
        this.resultado='es valido';
      else 
        this.resultado='no es valido'
    }
}
