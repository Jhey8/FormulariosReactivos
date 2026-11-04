import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.css']
})
export class Dashboard {
  nombreUsuario: string = 'Invitado';

  constructor(private router: Router) {
    // Capturamos el estado enviado desde el formulario de registro
    const navigation = this.router.getCurrentNavigation();
    const state = navigation?.extras?.state as { usuario: string };

    if (state && state.usuario) {
      this.nombreUsuario = state.usuario;
    }
  }
}
