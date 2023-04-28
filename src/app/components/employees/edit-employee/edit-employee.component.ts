import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.model';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css'],
})
export class EditEmployeeComponent implements OnInit {
  detailsEmployeeRequest: Employee = {
    id: '',
    name: '',
    email: '',
    phone: 0,
    salary: 0,
    department: '',
  };

  constructor(
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // get details
    this.route.paramMap.subscribe({
      next: (params) => {
        const id = params.get('id');
        if (id) {
          this.employeeService.GetEmployee(id).subscribe({
            next: (response) => (this.detailsEmployeeRequest = response),
          });
        }
      },
    });
  }

  saveEmployee() {
    // save changes
    if (this.detailsEmployeeRequest.id !== undefined) {
      this.employeeService
        .UpdateEmployee(
          this.detailsEmployeeRequest.id,
          this.detailsEmployeeRequest
        )
        .subscribe({
          next: (response) => this.router.navigate(['employees']),
        });
    }
  }

  onDelete(id?: string) {
    // delete
    if (id !== undefined) {
      this.employeeService.DeleteEmoloyee(id).subscribe({
        next: (response) => this.router.navigate(['employees']),
      });
    }
  }
}
