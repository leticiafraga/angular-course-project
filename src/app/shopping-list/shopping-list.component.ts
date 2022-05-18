import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient[];
  private sub: Subscription;

  constructor(private sls: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.sls.getIngredients();
    this.sub = this.sls.ingredientsChanged.subscribe((ing: Ingredient[]) => {
      this.ingredients = ing;
    });
  }

  editItem(index: number) {
    this.sls.startedEditing.next(index);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
