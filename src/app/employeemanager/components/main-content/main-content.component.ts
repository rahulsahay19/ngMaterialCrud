import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {
  employees: Observable<Employee[]>;
  employee: Employee;
  constructor(private employeeService: EmployeeService,
     private router: Router,
     private route: ActivatedRoute) { }

  ngOnInit() {
    this.employees = this.employeeService.employees;
    this.employeeService.loadAll();
    this.employees.subscribe(data =>{
      console.log(data);
    });

    this.route.params.subscribe(params =>{
      const id = params['id'];
      this.employee = this.employeeService.employeeById(id);
    });
  }

  __cardClick(emp){
    this.router.navigate(['employee/edit', emp.employeeId]);
  }

}
