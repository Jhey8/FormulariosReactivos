import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router'; //se agregó

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})

export class Login {

  loginForm: FormGroup;
  mensajeExito: string = '';
  mensajeError: string = '';

  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  // Getter auxiliar para acceder rápido a los controles desde la vista
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched(); // Muestra los errores visuales si se intenta enviar vacío
      return;
    }

    const datosLogin = this.loginForm.value;
    const usuarioGuardado = localStorage.getItem('usuarioRegistrado');

    if (!usuarioGuardado) {
      this.mensajeExito = 'No existe ningún usuario registrado.';
      return;
    }

    const usuario = JSON.parse(usuarioGuardado);

    // Validación de correo y contraseña
    if (
      datosLogin.email === usuario.email &&
      datosLogin.password === usuario.password
    ) {
      this.mensajeExito = '¡Inicio de sesión correcto!';

      this.router.navigate(['/dashboard']);

    } else {
      this.mensajeError = 'Correo o contraseña incorrectos.';
      
    }
  }
}
