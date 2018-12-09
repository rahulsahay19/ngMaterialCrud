import { Component, OnInit, NgZone } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { Observable } from 'rxjs';
import { Employee } from '../../models/employee';

const SMALL_WIDTH_BREAKPOINT = 720;

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  private mediaMatcher: MediaQueryList = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  employees: Observable<Employee[]>;
  isIndigoTheme: boolean = false;
  dir: string = 'ltr';
  constructor(zone: NgZone, private employeeService: EmployeeService) {
    this.mediaMatcher.addListener(mql =>
      zone.run(() => this.mediaMatcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)));
   }

  ngOnInit() {
    this.employees = this.employeeService.employees;
    this.employeeService.loadAll();
    this.employees.subscribe(data => {
      console.log(data);
    })
  }

  isScreenSmall(): boolean{
    return this.mediaMatcher.matches;
  }

  toggleDir(){
    this.dir = this.dir == 'ltr' ? 'rtl' : 'ltr';
  }

  }
