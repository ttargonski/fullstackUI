import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { environment } from 'src/environment/evironment';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private url: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}

  GetAllEmoloyees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url + '/api/employees');
  }

  AddEmployee(emp: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url + '/api/employees', emp);
  }

  GetEmployee(id: string): Observable<Employee> {
    return this.http.get<Employee>(this.url + '/api/employees/' + id);
  }

  DeleteEmoloyee(id: string): Observable<Employee> {
    return this.http.delete<Employee>(this.url + '/api/employees/' + id);
  }

  UpdateEmployee(id: string, emp: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.url + '/api/employees/' + id, emp);
  }
}
