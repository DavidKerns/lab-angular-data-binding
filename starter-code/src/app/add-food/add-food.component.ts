
import { Component, OnInit } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-add-food',
  templateUrl: './add-food.component.html',
  styleUrls: ['./add-food.component.css']
})
export class AddFoodComponent implements OnInit {
foods = foods;
newFood: Object = {};
todaysFood = [];

  constructor() {

  }

  ngOnInit() {

  }

addItem(name, calories:number, image:string){
  let newFood = {
  name: name,
  calories: calories,
  image: image
}
foods.unshift(newFood);
}

}
