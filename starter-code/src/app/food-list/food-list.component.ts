import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {
  foods: Object[];

  today = new Date();
 stuff: Array<Object> = [];
 pattern: string;

  constructor() { }

  ngOnInit() {
    this.foods= foods;
  }
  addItem(item) {
      this.stuff.push({name: item});
    }

}
