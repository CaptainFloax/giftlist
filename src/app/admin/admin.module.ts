import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AdminRoutingModule, adminRoutingComponents } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    LoginComponent,
    AdminComponent,
    DashboardComponent,
    adminRoutingComponents
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AdminRoutingModule,
    FormsModule
  ]
})
export class AdminModule { }
