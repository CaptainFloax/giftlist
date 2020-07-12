import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-miette',
  templateUrl: './miette.component.html',
  styleUrls: ['./miette.component.scss']
})
export class MietteComponent implements OnInit {
  //PROFIL MODELS
  miette: any = {
    "avatar": "baby-01.jpeg",
    "name": "Bruce Vanderschooten",
    "sexe": "Fille",
    "weight": "3.00",
    "height": "50.00",
    "birth": "07/09/2020",
    "look": "Sa mère",
    "hair": "roux",
    "from": ""
  }
  isSend: boolean = false;

  titles: any = [
    'Notre petite miette',
    'Créez le profil BabyBook de miette : genre, prénom, taille, poids, soyez créatifs ! Petit indice, le terme est prévu le 07/09.'
  ]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {}

  resetProno(){
    this.miette = {
      "avatar": "baby-01.jpeg",
      "name": "Bruce Vanderschooten",
      "sexe": "Fille",
      "weight": "3.00",
      "height": "50.00",
      "birth": "07/09/2020",
      "look": "Sa mère",
      "hair": "roux",
      "from": ""
    }
  }

  sendProno(){
    //this.http.post(environment._apiurl + "/prono", this.miette).subscribe((data) => { });
    this.isSend = true;
    this.resetProno();
  }

}
