import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  ingredientsChanged = new Subject<Ingredient[]>();
  // ingredientsChanged = new EventEmitter<Ingredient[]>();
  startedEditing = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient("Apples", 5),
    new Ingredient("Tomatoes", 10)

  ];

  constructor() { }

  getIngredients() {
    return this.ingredients.slice();
  }

  getIngredient(i: number) {
    return this.ingredients[i];
  }

  addIngredient(ing: Ingredient) {
    this.ingredients.push(ing);
    this.emit();
    // this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.emit();
  }

  updateIngredient(index: number, newIng: Ingredient) {
    this.ingredients[index] = newIng;
    this.emit();
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.emit();
  }

  emit() {
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
