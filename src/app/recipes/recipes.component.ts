import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor() { }
  // constructor(private rs: RecipesService) { }

  ngOnInit(): void {

    // not necessary with routing    
    // this.rs.recipeSelected.subscribe((recipe:Recipe) => {
    //   this.selectedRecipe = recipe;
    // });
  }

}
