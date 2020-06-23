import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  titles: any = [
    'Bienvenue sur ma Chère Cigogne',
    'Découvrez la liste de naissance des produits qui nous ferait plaisir pour accueil notre petite miette !'
  ]

  constructor() {}

  ngOnInit(){
    
  }

}
