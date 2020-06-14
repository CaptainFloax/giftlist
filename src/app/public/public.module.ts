import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule, publicRoutingComponents } from './public-routing.module';
import { PublicComponent } from './public.component';

import { SidebarComponent } from './sidebar/sidebar.component';


@NgModule({
  declarations: [
    PublicComponent,
    SidebarComponent,
    publicRoutingComponents // Public Routes and Components declaration
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PublicRoutingModule,
  ]
})
export class PublicModule { }
