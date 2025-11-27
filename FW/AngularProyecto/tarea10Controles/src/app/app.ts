import { Component, signal } from '@angular/core';
import { ReactiveFormsModule,FormControl,FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  conversion="";
  potenciaNumero="";
  cantidad="";

  formularioConversacion = new FormGroup({
    numeroDecimal: new FormControl(''),
    base: new FormControl('octal'),
    potencia: new FormControl('2'),
    largo: new FormControl(true)
  });

  submit(){
    if(this.formularioConversacion.value.numeroDecimal){
      if(this.formularioConversacion.value.base == "hexadecimal"){
        this.conversion = parseInt(this.formularioConversacion.value.numeroDecimal).toString(16);
      }
      if(this.formularioConversacion.value.base == "octal"){
        this.conversion = parseInt(this.formularioConversacion.value.numeroDecimal).toString(8);
      }
      if(this.formularioConversacion.value.numeroDecimal && this.formularioConversacion.value.potencia){
        this.potenciaNumero = Math.pow(parseInt(this.formularioConversacion.value.numeroDecimal),parseInt(this.formularioConversacion.value.potencia)).toString();
      }
      if(this.formularioConversacion.value.largo){
        this.cantidad =this.formularioConversacion.value.numeroDecimal.length.toString();
      }
    }
  }
}
