import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../../../core/services/employee';

@Component({
  selector: 'app-edit-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-employee.html',
  styleUrl: './edit-employee.scss'
})
export class EditEmployeeComponent implements OnInit {

  employeeId!: number;
  employeeForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {

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

  ngOnInit(): void {

    this.employeeId = Number(
      this.route.snapshot.paramMap.get('id')
    );

    console.log('Employee ID:', this.employeeId);

    this.employeeService.getEmployee(this.employeeId)
      .subscribe({
        next: (emp: any) => {

          console.log('Employee Data:', emp);

          this.employeeForm.patchValue({
            employee_code: emp.employee_code,
            name: emp.name,
            email: emp.email,
            phone: emp.phone,
            department: emp.department,
            designation: emp.designation,
            salary: emp.salary
          });

        },
        error: (err) => {
          console.log('GET ERROR:', err);
        }
      });

  }

  updateEmployee(): void {

    if (this.employeeForm.invalid) {
      this.employeeForm.markAllAsTouched();
      return;
    }

    this.employeeService.updateEmployee(
      this.employeeId,
      this.employeeForm.value
    ).subscribe({
      next: (res) => {

        console.log('UPDATED:', res);

        this.router.navigate(['/employees']);

      },
      error: (err) => {

        console.log('UPDATE ERROR:', err);

      }
    });

  }

}