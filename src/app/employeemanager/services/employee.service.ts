import { Injectable } from '@angular/core';
import { Employee } from '../models/employee';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private _employees: BehaviorSubject<Employee[]>;

  private dataStore: {
    employees: Employee[]
  }

  //this will allow components to subscribe to this behavior subject
  constructor(private http: HttpClient) { 
    this.dataStore = { employees: [] };
    this._employees = new BehaviorSubject<Employee[]>([]);
  }

  get employees(): Observable<Employee[]>{
    return this._employees.asObservable();
  }

  loadAll() {
    const employeesUrl = 'https://angular-material-api.azurewebsites.net/users';
    return this.http.get<Employee[]>(employeesUrl)
    .subscribe(data =>{
      this.dataStore.employees = data;
      //next will publish data to all our subscribing components
      //object.assign will make a new copy of the internal store.
      //this is to prevent the actual store from being tampered
      this._employees.next(Object.assign({}, this.dataStore).employees);
    }, err=>{
      console.log('Unable to fetch employees!');
    });
  }
  employeeById(id : number){
    return this.dataStore.employees.find(x=>x.id == id);
  }

  addEmployee(empl:Employee): Promise<Employee>{
    return new Promise((resolver,reject) =>{
      empl.id = this.dataStore.employees.length + 1;
      this.dataStore.employees.push(empl);
      this._employees.next(Object.assign({}, this.dataStore).employees);
      resolver(empl);
    });
  }
}
