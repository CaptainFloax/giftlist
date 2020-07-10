import { Component, OnInit } from '@angular/core';
import * as cat from '../../../data/categories.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: any[] = cat.categories;

  titles: any = [
    'Bienvenue sur ma Chère Cigogne',
    'Découvrez la liste de naissance des produits qui nous ferait plaisir pour accueil notre petite miette !'
  ]

  pages: any = [
    {
      illu: 'home_02.svg',
      title: 'Vous voulez nous laisser un message ?',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare aenean tempor, pharetra ullamcorper non. Euismod.',
      link: {
        label: 'Nous écrire',
        tag: 'contact'
      }
    },
    {
      illu: 'home_03.svg',
      title: 'Vous voulez participer aux pronostiques ?',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare aenean tempor, pharetra ullamcorper non. Euismod.',
      link: {
        label: 'Participer',
        tag: 'miette'
      }
    },
    {
      illu: 'home_04.svg',
      title: 'Pas d’idée de cadeaux ? Participer à la cagnotte !',
      text : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ornare aenean tempor, pharetra ullamcorper non. Euismod.',
      link: {
        label: 'Accéder à la cagnotte',
        tag: 'cagnotte'
      }
    }
  ];

  constructor() {}

  ngOnInit(){
    
  }

}
