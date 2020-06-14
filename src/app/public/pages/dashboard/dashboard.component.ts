import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  titles: any = [
    'Bienvenue sur ma Chère Cigogne',
    'Découvrez la liste de naissance des produits qui nous ferait plaisir pour accueil notre petite miette !'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
