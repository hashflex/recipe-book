import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Chicken', 'Chicken khurma', 'http://del.h-cdn.co/assets/16/24/640x320/landscape-1466100771-sweet-sour-chicken.png'),
    new Recipe('Mutton', 'Mutton curry', 'https://2.bp.blogspot.com/--qSXjvPqwlk/WNIdQmvaN6I/AAAAAAAADAg/h0j9hytktVY2lFI_AuhBR1fE7UkfK3t0gCLcB/s1600/Mutton%2BRogan%2BJosh%2BRecipe.JPG'),
    new Recipe('Fish', 'Nice fish curry', 'https://i.ytimg.com/vi/3NjKS_7xTXQ/hqdefault.jpg')
  ];

  constructor() {
  }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
