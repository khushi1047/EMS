import { Routes } from '@angular/router';

import { authGuard } from './core/guards/auth-guard';
import { adminGuard } from './core/guards/admin-guard';
import { employeeGuard } from './core/guards/employee-guard';

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
    path: 'admin-dashboard',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./features/admin/pages/admin-dashboard/admin-dashboard')
        .then(m => m.AdminDashboard)
  },

  {
    path: 'employee-dashboard',
    canActivate: [authGuard, employeeGuard],
    loadComponent: () =>
      import('./features/employee/pages/employee-dashboard/employee-dashboard')
        .then(m => m.EmployeeDashboard)
  },

  {
    path: 'employees',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./features/admin/pages/employees/employees')
        .then(m => m.EmployeesComponent)
  },

  {
    path: 'add-employee',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./features/admin/pages/add-employee/add-employee')
        .then(m => m.AddEmployeeComponent)
  },

  {
    path: 'edit-employee/:id',
    canActivate: [authGuard, adminGuard],
    loadComponent: () =>
      import('./features/admin/pages/edit-employee/edit-employee')
        .then(m => m.EditEmployeeComponent)
  },

  {
    path: '**',
    redirectTo: 'login'
  }
];