import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() category: any = [
    {
      name: "Tout",
      link: "all"
    },
    {
      name: "Bain & Higiène",
      link: "bath"
    },
    {
      name: "Déplacement & Sécurité",
      link: "security"
    },
    {
      name: "Dodo",
      link: "dodo"
    },
    {
      name: "Jeux & Eveil",
      link: "games"
    },
    {
      name: "Repas",
      link: "meal"
    },
    {
      name: "Vétêments",
      link: "clothes"
    },
    {
      name: "Divers",
      link: "others"
    },
  ]

  navigationItems: any = [
      {
        name: "Accueil",
        link: "home",
        icon: "tutute.svg",
        child: false
      },
      {
        name: "Liste de naissance",
        link: "lists",
        icon: "fashion.svg",
        child: true
      },
      {
        name: "Notre petite Miette",
        link: "miette",
        icon: "toy.svg",
        child: false
      },
      {
        name: "Nous écrire",
        link: "contact",
        icon: "diaper.svg",
        child: false
      }
  ];

  lists: any = [
    {
      name: "Ce dont on a besoin",
      link: "need"
    },
    {
      name: "Ce que l'on a",
      link: "have"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  isActive(route: string){
    if( window.location.pathname === route) {
      return true;
    } else {
      return false;
    }
  }

}
