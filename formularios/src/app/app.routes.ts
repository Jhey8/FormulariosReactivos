import { Routes } from '@angular/router';
import { Dashboard } from './componentes/dashboard/dashboard';
import { RegistroUsuarioComponent } from './componentes/registro-usuario/registro-usuario';
import { Login } from './componentes/login/login';

export const routes: Routes = [
  { path: '', redirectTo: 'registro', pathMatch: 'full' },
  { path: 'registro', component: RegistroUsuarioComponent },
  { path: 'login', component: Login },
  { path: 'dashboard', component: Dashboard }

];
