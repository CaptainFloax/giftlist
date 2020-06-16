import { Component, OnInit } from '@angular/core';
import * as data from '../../../data/products.json';
import * as cat from '../../../data/categories.json';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {
  products: Product[] = data.products;
  categories: any[] = cat.categories;
  filteredProducts: Product[] = [];
  activeFilter: string = "all";

  titles: any = [
    'La liste de nos envies',
    'Vous pouvez participer à l\achat d\'un ou plusieurs cadeaux'
  ]

  constructor() {}

  ngOnInit(): void {
    this.filteredProducts = this.products;
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

}
