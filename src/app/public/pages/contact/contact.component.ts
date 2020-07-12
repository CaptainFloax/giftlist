import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  // FORM INPUTS
  msg: any = {
    "name": "",
    "email": "",
    "msg": ""
  }

  titles: any = [
    'Nous écrire',
    'Laisser nous un petit mot, ou adressez nous vos bons conseils pour survivre à l\'arrivée d\'un petit être'
  ]

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  sendContact(){
    this.http.post(environment._apiurl + "/contact", this.msg).subscribe((data) => { });
  }

}
