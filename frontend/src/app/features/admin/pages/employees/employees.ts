import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { EmployeeService } from '../../../../core/services/employee';

@Component({
  selector: 'app-employees',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './employees.html',
  styleUrl: './employees.scss'
})
export class EmployeesComponent implements OnInit {

  employees: any[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
  this.employeeService.getEmployees().subscribe({
    next: (res: any) => {
      console.log("API RESPONSE:", res);

      this.employees = Array.isArray(res) ? res : [];
    },
    error: (err) => {
      console.log(err);
    }
  });
}

  edit(id: number) {
    this.router.navigate(['/edit-employee', id]);
  }

  delete(id: number) {
    this.employeeService.deleteEmployee(id).subscribe({
      next: () => {
        this.loadEmployees();
      }
    });
  }
}