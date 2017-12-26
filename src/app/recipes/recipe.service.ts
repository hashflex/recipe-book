import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  private recipes: Recipe[] = [
    new Recipe('Chicken',
      'Chicken khurma',
      'http://del.h-cdn.co/assets/16/24/640x320/landscape-1466100771-sweet-sour-chicken.png',
      [new Ingredient('Chicken', 1)]),
    new Recipe('Mutton',
      'Mutton curry',
      'https://2.bp.blogspot.com/--qSXjvPqwlk/WNIdQmvaN6I/AAAAAAAADAg/h0j9hytktVY2lFI_AuhBR1fE7UkfK3t0gCLcB/s1600/Mutton%2BRogan%2BJosh%2BRecipe.JPG',
      [new Ingredient('Mutton', 1)]),
    new Recipe('Fish',
      'Nice fish curry',
      'https://i.ytimg.com/vi/3NjKS_7xTXQ/hqdefault.jpg',
      [new Ingredient('Fish', 1), new Ingredient('Mustard', 2)])
  ];

  getRecipes(): Recipe[] {
    return this.recipes.slice(); // returns a copy of the recipes array
  }

  addIngredientToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
