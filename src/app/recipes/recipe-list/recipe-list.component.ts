import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  
  recipes: Recipe[] = [
  	new Recipe("A test recipe 1", "test", "http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/09/main/1101-hawaiian-chicken-ck.jpg?itok=rTJgcebj"),
  	new Recipe("A test recipe 2", "test", "http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/09/main/1101-hawaiian-chicken-ck.jpg?itok=rTJgcebj"),
  	new Recipe("A test recipe 3", "test", "http://img1.cookinglight.timeinc.net/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/2016/09/main/1101-hawaiian-chicken-ck.jpg?itok=rTJgcebj")
  ];

  constructor() { }

  ngOnInit() {
  }

}
