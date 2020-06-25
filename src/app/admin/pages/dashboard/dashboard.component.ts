import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as cat from '../../../data/categories.json';
import { environment } from '../../../../environments/environment';
import { Product } from 'src/app/models/product';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  products: any = [];
  product: Product = new Product();
  categories: Category[] = cat.categories;
  creation: boolean = false;
  sCat: Category = new Category();

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get(environment._apiurl+'/products')
            .subscribe(products => {
                this.products = products;
                this.selectProduct(products[0]);
            });
  }

  selectProduct(p: any){
    this.creation = false;
    this.product = p;
    this.product.myCat = {name: p.cat, tag: p.tag} ;
    this.sCat.name = p.cat;
    this.sCat.tag = p.tag;
  }

  compareFn(c1: any, c2:any): boolean {     
    return c1 && c2 ? c1.id === c2.id : c1 === c2; 
  }

  createProduct(){
    this.creation = true;
    this.product = new Product();
  }

  changeCat(){
    this.product.cat = this.product.myCat.name;
    this.product.tag = this.product.myCat.tag;
  }

  removeProduct(){
    this.http.post(environment._apiurl + '/delete'+ this.product.pid, {}).subscribe();
  }

  saveUser(){
    if(this.creation){
      this.http.post(environment._apiurl+'/product', {
        "img": this.product.img,
        "name": this.product.name,
        "description": this.product.description,
        "price": this.product.price,
        "shop": this.product.shop,
        "isBought": this.product.isBought,
        "cat": this.product.cat,
        "tag": this.product.tag,
        "link": this.product.link,
        "quantity": this.product.quantity,
        "participation": this.product.participation
      }).subscribe();
    }else{
      this.http.post(environment._apiurl+'/update/product/'+this.product.pid, {
        "img": this.product.img,
        "name": this.product.name,
        "description": this.product.description,
        "price": this.product.price,
        "shop": this.product.shop,
        "isBought": this.product.isBought,
        "cat": this.product.cat,
        "tag": this.product.tag,
        "link": this.product.link,
        "quantity": this.product.quantity,
        "participation": this.product.participation
      }).subscribe();
    }
  }
}
