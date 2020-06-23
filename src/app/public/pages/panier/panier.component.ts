import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  product: any = new Product();
  titles: string[]= [
    "Vous ne savez pas comment nous transmettre votre cadeau ?",
    "Suivez les étapes pour trouver la meilleure façon de le faire !"
  ];

  constructor(public dataService: DataService, private _router: Router) { }

  ngOnInit(): void {
    if(this.dataService.chosenProduct){
      this.product = this.dataService.chosenProduct;
    }else{
      this._router.navigate(['/lists'])
    }
  }

}
