import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EmployeemanagerAppComponent } from './employeemanager-app.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { EmployeeManagerRoutingModule } from './employeemanager-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NewEmployeeDialogComponent } from './components/new-employee-dialog/new-employee-dialog.component';

@NgModule({
  declarations: [
    EmployeemanagerAppComponent,
    ToolbarComponent,
    MainContentComponent,
    SidenavComponent,
    NewEmployeeDialogComponent,
    //ReactiveFormsModule
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    FlexLayoutModule,
    HttpClientModule,
    EmployeeManagerRoutingModule
  ],
  entryComponents: [NewEmployeeDialogComponent]
})
export class EmployeemanagerModule { }
