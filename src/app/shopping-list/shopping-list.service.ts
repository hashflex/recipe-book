import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable()
export class ShoppingListService {

  constructor() {
  }

  ingredientChanged = new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 2)
  ];

  public getIngredients(): Ingredient[] {
    return this.ingredients.slice(); // returns a copy of ingredients array
  }

  public addIngredient(ingredient: Ingredient): boolean {
    let incremented = false;
    const newIngredient = {...ingredient}; // create a new instance

    Object.keys(this.ingredients).forEach(key => {
      if ( this.ingredients[key].name === newIngredient.name ) {
        incremented = true;
        const existingAmount = +this.ingredients[key].amount;
        const newAmount = +newIngredient.amount;
        this.ingredients[key].amount = existingAmount + newAmount;
      }
    });

    if ( !incremented ) {
      this.ingredients.push(newIngredient);
    }

    this.ingredientChanged.emit(this.getIngredients());

    return true;
  }

  public addIngredients(ingredients: Ingredient[]): boolean {

    for ( const ingredient of ingredients ) {
      this.addIngredient(ingredient);
    }

    return true;
  }
}
