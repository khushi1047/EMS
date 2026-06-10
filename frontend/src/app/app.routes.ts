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
    path: 'admin-dashboard',
    loadComponent: () =>
      import('./features/admin/pages/admin-dashboard/admin-dashboard')
        .then(m => m.AdminDashboard)
  },

  {
    path: 'employee-dashboard',
    loadComponent: () =>
      import('./features/employee/pages/employee-dashboard/employee-dashboard')
        .then(m => m.EmployeeDashboard)
  },
  {
  path: 'employees',
  loadComponent: () =>
    import('./features/admin/pages/employees/employees')
      .then(m => m.EmployeesComponent)
},
{
  path: 'add-employee',
  loadComponent: () =>
    import('./features/admin/pages/add-employee/add-employee')
      .then(m => m.AddEmployeeComponent)
},
{
  path: 'edit-employee/:id',
  loadComponent: () =>
    import('./features/admin/pages/edit-employee/edit-employee')
      .then(m => m.EditEmployeeComponent)
}
];