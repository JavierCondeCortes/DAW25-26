import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  usuarios: any[] = [];

  formUsuario = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    biografia: new FormControl(''),
    genero: new FormControl(''),
    preferencias: new FormGroup({
      intereses: new FormControl<string[]>([]),
      experiencia: new FormControl('')
    })
  });

  constructor() {
    const data = localStorage.getItem('usuarios');
    if (data) {
      this.usuarios = JSON.parse(data);
    }
  }

  submit() {
    const nuevoUsuario = { ...this.formUsuario.value };

    this.usuarios.push(nuevoUsuario);
    localStorage.setItem('usuarios', JSON.stringify(this.usuarios));

    this.resetForm();
  }

  resetForm() {
    this.formUsuario.reset({
      nombre: '',
      email: '',
      biografia: '',
      genero: '',
      preferencias: {
        intereses: [],
        experiencia: ''
      }
    });
  }

  resetUsuarios() {
    this.usuarios = [];
    localStorage.removeItem('usuarios');
  }

  onCheckboxChange(event: any, interes: string) {
    const intereses = this.formUsuario.get('preferencias.intereses')?.value as string[] || [];

    if (event.target.checked) {
      intereses.push(interes);
    } else {
      const index = intereses.indexOf(interes);
      if (index > -1) {
        intereses.splice(index, 1);
      }
    }

    this.formUsuario.get('preferencias.intereses')?.setValue(intereses);
  }
}
