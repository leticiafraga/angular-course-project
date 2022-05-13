import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredients:Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)

  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ing:Ingredient) {
    this.ingredients.push(ing);
  }
}
