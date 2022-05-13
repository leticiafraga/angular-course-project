import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Test", "First recipe",
    "https://www.cozinhandopara2ou1.com/wp-content/uploads/2017/12/PeixinhoDaHorta_CozinhandoPara2ou1.jpg"),
    new Recipe("Second Test", "Second recipe",
    "https://www.cozinhandopara2ou1.com/wp-content/uploads/2017/12/PeixinhoDaHorta_CozinhandoPara2ou1.jpg")
  ];

  constructor() { }

  // returns a copy of the array
  getRecipes() {
    return this.recipes.slice();
  }
}
