import { Component, OnInit, Inject } from '@angular/core';
import { Employee } from '../../models/employee';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { EmployeeService } from '../../services/employee.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-employee-dialog',
  templateUrl: './edit-employee-dialog.component.html',
  styleUrls: ['./edit-employee-dialog.component.scss']
})
export class EditEmployeeDialogComponent implements OnInit {

  form: FormGroup;
  avatars = [
    'svg-1', 'svg-2', 'svg-3', 'svg-4'
  ]
  constructor(private fb: FormBuilder,
    private dialogRef: MatDialogRef<EditEmployeeDialogComponent>,
    private employeeService: EmployeeService,
    @Inject(MAT_DIALOG_DATA) {avatar, name, birthDate, bio}: Employee) { 
      
      this.form = fb.group({
        avatar: [avatar],
        name: [name],
        birthDate: [birthDate],
        bio: [bio]
      });
    }

  ngOnInit() {
    
  }

  onEdit(){

    // this.employeeService.editEmployee(emp).then(empl=>{
    //   this.dialogRef.close(empl);
    // });
    
    this.employeeService.editEmployee(this.form.value).then(empl=>{
      this.dialogRef.close(empl);
    });
  }

  onCancel(){
    this.dialogRef.close();
  }

}
