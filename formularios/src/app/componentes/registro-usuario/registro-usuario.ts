import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; //se agregó

@Component({
  selector: 'app-registro-usuario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './registro-usuario.html',
  styleUrls: ['./registro-usuario.css']
})
export class RegistroUsuarioComponent {
  registroForm: FormGroup;
  mensajeExito: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.registroForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      edad: ['', [Validators.required, Validators.min(18), Validators.max(99)]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  // Getter auxiliar para acceder rápido a los controles desde la vista
  get f() {
    return this.registroForm.controls;
  }

  onSubmit() {
    if (this.registroForm.invalid) {
      this.registroForm.markAllAsTouched(); // Muestra los errores visuales si se intenta enviar vacío
      return;
    }

    const usuario = this.registroForm.value;

    localStorage.setItem('usuarioRegistrado', JSON.stringify(usuario));


    console.log('Datos válidos del formulario:', this.registroForm.value);
    this.mensajeExito = '¡Formulario enviado con éxito!';

    this.router.navigate(['/login']);
  }
}
