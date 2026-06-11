import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const employeeGuard: CanActivateFn = () => {
  const router = inject(Router);

  const user = JSON.parse(localStorage.getItem('user') || '{}');

  if (user.role === 'employee') {
    return true;
  }

  router.navigate(['/admin-dashboard']);
  return false;
};