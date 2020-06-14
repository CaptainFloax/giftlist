import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-miette',
  templateUrl: './miette.component.html',
  styleUrls: ['./miette.component.scss']
})
export class MietteComponent implements OnInit {

  titles: any = [
    'Notre petite miette',
    'Faites vos jeux et vos prédictions : genre, prénom, taille, poids, soyez créatifs !'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
