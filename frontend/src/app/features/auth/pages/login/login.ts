import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class LoginComponent {

  loginForm: FormGroup;
  

  constructor(private fb: FormBuilder, private auth: AuthService, private router : Router) {
    
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  onSubmit() {

  if (this.loginForm.invalid) {
    this.loginForm.markAllAsTouched();
    return;
  }

  this.auth.login(this.loginForm.value).subscribe({
  next: (res: any) => {
    console.log('LOGIN SUCCESS', res);

    // store token
    localStorage.setItem('token', res.token);

    // store user
    localStorage.setItem('user', JSON.stringify(res.user));

    // redirect to dashboard
    this.router.navigate(['/dashboard']);
  },
  error: (err) => {
    console.log('LOGIN FAILED', err);
  }
});

}
}