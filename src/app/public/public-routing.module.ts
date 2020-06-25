import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { HomeComponent } from './pages/home/home.component';
import { ListComponent } from './pages/list/list.component';
import { ListsComponent } from './pages/lists/lists.component';
import { MietteComponent } from './pages/miette/miette.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PanierComponent } from './pages/panier/panier.component';


const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      },
      {
        path: 'lists',
        component: ListComponent,
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
      {
        path: 'panier',
        component: PanierComponent,
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: ''
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
