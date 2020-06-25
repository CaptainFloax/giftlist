import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as cat from '../../../data/categories.json';
import { Product } from 'src/app/models/product';
import { DataService } from 'src/app/services/data.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @ViewChild('productsList') elPList: ElementRef;
  products: any;
  categories: any[] = cat.categories;
  filteredProducts: any;
  activeFilter: string = "all";
  p: any = new Product();
  i: number = 0;

  constructor(private http: HttpClient, public dataService: DataService) { }

  ngOnInit(): void {
    this.http.get(environment._apiurl+'/products')
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
                this.p = this.products[0];
            });
  }

  showProduct(p: any, i: number){
    if(i > this.i){
      this.elPList.nativeElement.scrollTo({
        left: i* 200,
        behavior: 'smooth'
      });
    }else{
      this.elPList.nativeElement.scrollTo({
        left: -i* 200,
        behavior: 'smooth'
      });
    }
    this.p = p;
    this.i = i;
  }

}
