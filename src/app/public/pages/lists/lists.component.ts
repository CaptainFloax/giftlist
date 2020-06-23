import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import * as data from '../../../data/products.json';
import * as cat from '../../../data/categories.json';
import { Product } from 'src/app/models/product';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment'

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

  titles: any = [
    'La liste de nos envies',
    'Vous pouvez participer à l\achat d\'un ou plusieurs cadeaux'
  ]

  constructor(private http: HttpClient, private ref: ChangeDetectorRef, public dataService: DataService, private _router: Router) {
    ref.detach();
    setInterval(() => {
      this.ref.detectChanges();
    }, 200);
  }

  ngOnInit(): void {
    this.http.get(environment._apiurl+'/products')
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
    this.http.get(environment._apiurl + '/product/'+pid)
            .subscribe(products => {

              this.printedProduct = products;
            });
    this.bristol = true;
  }

  offer(){
    this.dataService.chosenProduct = this.printedProduct;
    this._router.navigate(['/panier']);
  }

  byPaypal(){
    window.open("https://paypal.me/mellovds", '_blank');
  }

  rib(){
    window.open("mailto:mellovds@gmail.com");
  }

  buy(){
    let posturl: string = environment._apiurl+ "/buy/" + this.printedProduct.pid;

    this.http.post(posturl, {}).subscribe((res) => {
        console.log(res);
      }
    );
  }

}
