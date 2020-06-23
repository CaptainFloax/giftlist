import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import ProductJson from '../data/products.json';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  chosenProduct: any;
 
  constructor() {}

  ngOnInit(){
  }
}
