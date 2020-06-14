import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss']
})
export class ListsComponent implements OnInit {

  titles: any = [
    'La liste de nos envies',
    'Vous pouvez participer à l\achat d\'un ou plusieurs cadeaux'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
