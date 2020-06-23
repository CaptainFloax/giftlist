import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as cat from '../../../data/categories.json';
import { environment } from '../../../../environments/environment';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: any = [];
  product: Product = new Product();
  categories: any[] = cat.categories;
  creation: boolean = false;

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get(environment._apiurl+'/products')
            .subscribe(products => {
                this.products = products;
            });
    this.initProduct()
  }

  selectProduct(p: any){
    this.creation = false;
    this.product = p;
  }

  createProduct(){
    this.creation = true;
    this.product = new Product();
    this.initProduct();
    console.log(this.product);
  }

  initProduct(){
    this.product.cat = ['bath'];
  }

  saveUser(){
    this.http.post(environment._apiurl+'/update/product/'+this.product.pid, {
      "img": this.product.img,
      "name": this.product.name,
      "description": this.product.description,
      "price": this.product.price,
      "shop": this.product.shop,
      "isBought": this.product.isBought,
      "cat": this.product.cat,
      "link": this.product.link,
      "quantity": this.product.quantity,
      "participation": this.product.participation
    }).subscribe();
    console.log(this.product);
  }
}
