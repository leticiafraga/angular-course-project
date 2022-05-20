import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  // recipeSelected = new EventEmitter<Recipe>();
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
  ];

  constructor(private sls: ShoppingListService) { }

  // returns a copy of the array
  getRecipes():Recipe[] {
    return this.recipes.slice();
  }

  setRecipes(r:Recipe[]){
    this.recipes = r;
    this.onRecipesChanged();
  }

  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }

  sendToShoppingList(ing: Ingredient[]) {
    this.sls.addIngredients(ing);
  }

  addRecipe(recipe: Recipe):number {
    this.recipes.push(recipe);
    this.onRecipesChanged();
    return this.recipes.length - 1;
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.onRecipesChanged();
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.onRecipesChanged();
  }

  onRecipesChanged() {
    this.recipesChanged.next(this.getRecipes());
  }
}
