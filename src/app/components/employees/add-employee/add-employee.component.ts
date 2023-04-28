import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css'],
})
export class AddEmployeeComponent {
  newEmployeeRequest: Employee = {
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  addEmployee() {
    this.employeeService.AddEmployee(this.newEmployeeRequest).subscribe({
      next: (employee) => console.log(employee),
    });
    this.router.navigate(['employees']);
  }
}
