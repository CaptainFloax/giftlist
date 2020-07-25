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
      text : 'Envoyez-nous vos meilleurs conseils pour l\'arrivée d\'un petit être ou laissez-nous simplement un petit mot.',
      link: {
        label: 'Nous écrire',
        tag: 'contact'
      }
    },
    {
      illu: 'home_03.svg',
      title: 'Vous voulez participer aux pronostics ?',
      text : 'Fille ou Garçon ? Grand ou Petit ? Blond ou Roux ? Devinez à qui il/elle va ressembler et son futur prénom !',
      link: {
        label: 'Jouer',
        tag: 'miette'
      }
    },
    {
      illu: 'home_04.svg',
      title: 'Pas d’idée de cadeaux ? Participez à la cagnotte !',
      text : 'Si vous souhaitez faire un geste sans forcément choisir de cadeau dans la liste, n\'hésitez pas à accéder à la cagnotte.',
      link: {
        label: 'Participer',
        tag: 'https://paypal.me/mellovds'
      }
    }
  ];

  constructor() {}

  ngOnInit(){
    
  }

}
