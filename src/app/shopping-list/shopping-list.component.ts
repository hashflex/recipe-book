import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 2)
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onIngredientAdded(ingredient: Ingredient) {
    let incremented = false;

    Object.keys(this.ingredients).forEach(key => {
      if ( this.ingredients[key].name === ingredient.name ) {
        incremented = true;
        const existingAmount = +this.ingredients[key].amount;
        const newAmount = +ingredient.amount;
        this.ingredients[key].amount = existingAmount + newAmount;
      }
    });

    if ( !incremented ) {
      this.ingredients.push(ingredient);
    }
  }
}
