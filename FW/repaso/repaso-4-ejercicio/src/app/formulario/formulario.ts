import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControlName, FormGroup, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Perso } from '../perso';

@Component({
  selector: 'app-formulario',
  imports: [RouterOutlet, RouterLink, ReactiveFormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css',
})
export class Formulario {
  resultado!:string;
  formulario:FormGroup;
  constructor(private fb:FormBuilder){
    this.formulario = this.fb.group({
      titulo: ['',[Validators.required]],
      director: ['',[Validators.required,Validators.minLength(10),Validators.maxLength(50)]],
      anio: ['',[Perso.mayorCero]],
      genero: ['',[Validators.required]],
      disponible:['']
    })
  }

  

  submit(){
    if(this.formulario.valid){
      this.resultado= "todo es valido, se agrego a la lista."
    }else{
      this.resultado ="Hay datos invalidos en el formulario"
    }
  }
}
