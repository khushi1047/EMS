import { Routes } from '@angular/router';
import { LoginComponent } from './features/auth/pages/login/login';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
  path: 'register',
  loadComponent: () =>
    import('./features/auth/pages/register/register')
      .then(m => m.RegisterComponent)
},
  {
    path: 'login',
    loadComponent: () =>
      import('./features/auth/pages/login/login')
        .then(m => m.LoginComponent)
  },
  {
  path: 'dashboard',
  loadComponent: () =>
    import('./features/dashboard/pages/dashboard/dashboard')
      .then(m => m.Dashboard)
}
];