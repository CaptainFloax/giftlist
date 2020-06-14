import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule, publicRoutingComponents } from './public-routing.module';
import { PublicComponent } from './public.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListsComponent } from './pages/lists/lists.component';
import { MietteComponent } from './pages/miette/miette.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TopbarComponent } from './topbar/topbar.component';


@NgModule({
  declarations: [
    PublicComponent,
    SidebarComponent,
    publicRoutingComponents,
    DashboardComponent,
    ListsComponent,
    MietteComponent,
    ContactComponent,
    TopbarComponent // Public Routes and Components declaration
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
