import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule, publicRoutingComponents } from './public-routing.module';
import { PublicComponent } from './public.component';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { ListsComponent } from './pages/lists/lists.component';
import { MietteComponent } from './pages/miette/miette.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { PanierComponent } from './pages/panier/panier.component';
import { AlertComponent } from './components/alert/alert.component';
import { ListComponent } from './pages/list/list.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './components/navbar/navbar.component';


@NgModule({
  declarations: [
    PublicComponent,
    SidebarComponent,
    publicRoutingComponents,
    HomeComponent,
    ListsComponent,
    MietteComponent,
    ContactComponent,
    TopbarComponent,
    PanierComponent,
    AlertComponent,
    ListComponent,
    NavbarComponent // Public Routes and Components declaration
  ],
  imports: [
    BrowserModule,
    CommonModule,
    PublicRoutingModule,
    FormsModule
  ]
})
export class PublicModule { }
