import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../../core/services/employee';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-employee.html',
  styleUrls: ['./add-employee.scss']
})
export class AddEmployeeComponent {

  employeeForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router
  ) {

    console.log('ADD EMPLOYEE COMPONENT LOADED');

    this.employeeForm = this.fb.group({
      employee_code: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      department: ['', Validators.required],
      designation: ['', Validators.required],
      salary: ['', Validators.required]
    });
  }

  onSubmit(): void {

    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    console.log('FORM DATA:', this.employeeForm.value);

    this.employeeService.addEmployee(this.employeeForm.value)
      .subscribe({
        next: (res) => {
          console.log('Employee Added:', res);
          this.router.navigate(['/employees']);
        },
        error: (err) => {
          console.error('ADD ERROR:', err);
        }
      });
  }
}