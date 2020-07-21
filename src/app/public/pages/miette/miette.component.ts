import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-miette',
  templateUrl: './miette.component.html',
  styleUrls: ['./miette.component.scss']
})
export class MietteComponent implements OnInit {
  pronoForm: FormGroup;
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
  error: string = "";

  titles: any = [
    'Notre petite miette',
    'Créez le profil BabyBook de miette : genre, prénom, taille, poids, soyez créatifs ! Petit indice, le terme est prévu le 07/09.'
  ]

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.pronoForm = this.formBuilder.group({
      avatar: ['baby-01.jpeg', Validators.required],
      name: ['', Validators.required],
      sexe: ['', Validators.required],
      weight: ['', Validators.required],
      height: ['', Validators.required],
      birth: ['', Validators.required],
      look: ['', Validators.required],
      hair: ['', Validators.required],
      from: ['', Validators.required],
    });
  }

  sendProno(){
    if(this.pronoForm.invalid){
      this.error = "Une erreur s'est produite, essayez à nouveau.";
      return;
    }

    let _formData = new FormData();
    _formData.append("avatar", this.pronoForm.value.avatar);
    _formData.append("name", this.pronoForm.value.name);
    _formData.append("sexe", this.pronoForm.value.sexe);
    _formData.append("weight", this.pronoForm.value.weight);
    _formData.append("height", this.pronoForm.value.height);
    _formData.append("birth", this.pronoForm.value.birth);
    _formData.append("look", this.pronoForm.value.look);
    _formData.append("hair", this.pronoForm.value.hair);
    _formData.append("from", this.pronoForm.value.from);
    

    this.http.post(environment._apiurl + "/prono", _formData).subscribe((data) => {
      this.error = "Votre pronostic a bien été envoyé !"
     }, error => { this.error = "Une erreur s'est produite, essayez à nouveau."});
    this.pronoForm.reset;
  }

}
