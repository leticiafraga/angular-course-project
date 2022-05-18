import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  // recipeSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe("Test", "First recipe",
      "https://www.cozinhandopara2ou1.com/wp-content/uploads/2017/12/PeixinhoDaHorta_CozinhandoPara2ou1.jpg",
      [
        new Ingredient("Peixinho da horta", 20),
        new Ingredient("Azeite", 1),
      ]),
    new Recipe("Second Test", "Second recipe",
      "https://www.cozinhandopara2ou1.com/wp-content/uploads/2017/12/PeixinhoDaHorta_CozinhandoPara2ou1.jpg", [
      new Ingredient("Castanha de caju", 20)
    ])
  ];

  constructor(private sls: ShoppingListService) { }

  // returns a copy of the array
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  sendToShoppingList(ing: Ingredient[]) {
    this.sls.addIngredients(ing);
  }
}
