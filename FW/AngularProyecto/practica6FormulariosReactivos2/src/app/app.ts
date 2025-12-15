import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  registroEventosForm: FormGroup;
  submittedData = signal<any | null>(null);

  constructor(private fb: FormBuilder) {

    this.registroEventosForm = this.fb.group({

      datosEvento: this.fb.group({
        titulo: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
        descripcion: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
        fecha: ['', Validators.required],
        aforo: ['', [Validators.required, Validators.min(1), Validators.max(500)]],
      }),

      ubicacionEvento: this.fb.group({
        ciudad: ['', Validators.required],
        pais: ['', Validators.required],
      }),

      preferenciasOrganizador: this.fb.group({
        gratuito: ['', Validators.required],
        modalidad: ['', Validators.required],
        categoria: ['', Validators.required]
      }),

      datosOrganizador: this.fb.group({
        nombre: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        telefono: ['', Validators.required]
      }),

      aceptacion: this.fb.group({
        terminos: [false, Validators.requiredTrue]
      })
    });
  }

  submit() {
    if (this.registroEventosForm.valid) {
      this.submittedData.set(this.registroEventosForm.value);
    }
  }
}
