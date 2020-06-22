import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as data from '../../../data/products.json';
import * as cat from '../../../data/categories.json';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  products: any;
  categories: any[] = cat.categories;
  filteredProducts: any;
  activeFilter: string = "all";
  printedProduct: any = new Product;
  bristol: boolean = false;
  wouldOffer: boolean = false;

  titles: any = [
    'La liste de nos envies',
    'Vous pouvez participer à l\achat d\'un ou plusieurs cadeaux'
  ]

  constructor(private http: HttpClient, private ref: ChangeDetectorRef) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 200);
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/products')
            .subscribe(products => {

                this.products = products;
                this.filteredProducts = this.products;
                this.printedProduct = this.products[0];

            });
  }

  filterProducts(cat: string){
    this.filteredProducts = this.products.filter(item => item.cat.includes(cat));
    this.activeFilter = cat;
  }

  resetFilters(){
    this.filteredProducts = this.products;
    this.activeFilter = "all";
  }

  isActive(tag: string){
    return this.activeFilter === tag;
  }

  showProduct(pid: number){
    this.wouldOffer = false;
    this.http.get('http://localhost:3000/product/'+pid)
            .subscribe(products => {

              this.printedProduct = products;
            });
    this.bristol = true;
  }

  offer(){
    this.wouldOffer = true;
  }

  byPaypal(){
    window.open("https://paypal.me/mellovds", '_blank');
  }

  rib(){
    window.open("mailto:mellovds@gmail.com");
  }

  buy(){
    let posturl: string = "http://localhost:3000/buy/" + this.printedProduct.pid;

    this.http.post(posturl, {}).subscribe((res) => {
        console.log(res);
      }
    );
  }

}
