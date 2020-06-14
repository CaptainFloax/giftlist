import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  titles: any = [
    'Nous écrire',
    'Laisser nous un petit mot, ou adressez nous vos bons conseils pour survivre à l\'arrivée d\'un petit être'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
