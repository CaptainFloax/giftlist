import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ListsComponent } from './pages/lists/lists.component';
import { MietteComponent } from './pages/miette/miette.component';
import { ContactComponent } from './pages/contact/contact.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'public/home',
    pathMatch: 'full'
  },
  {
    path: 'public',
    component: PublicComponent,
    children: [
      {
        path: 'home',
        component: DashboardComponent,
        pathMatch: 'full'
      },
      {
        path: 'lists',
        component: ListsComponent,
        pathMatch: 'full'
      },
      {
        path: 'miette',
        component: MietteComponent,
        pathMatch: 'full'
      },
      {
        path: 'contact',
        component: ContactComponent,
        pathMatch: 'full'
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
export const publicRoutingComponents = [PublicComponent] // Export of all the Public Components
