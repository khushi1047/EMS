import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private api = 'http://127.0.0.1:8000/api/employees';

  constructor(private http: HttpClient) {}

  getEmployees() {
    return this.http.get<any[]>(this.api);
  }

  getEmployee(id: number) {
    return this.http.get(`${this.api}/${id}`);
  }

  addEmployee(data: any) {
    return this.http.post(this.api, data);
  }

  updateEmployee(id: number, data: any) {
    return this.http.put(`${this.api}/${id}`, data);
  }

  deleteEmployee(id: number) {
    return this.http.delete(`${this.api}/${id}`);
  }
}
