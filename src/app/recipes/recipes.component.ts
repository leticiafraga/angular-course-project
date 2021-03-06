import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  selectedRecipe: Recipe;

  constructor(private dss: DataStorageService) { }
  // constructor(private rs: RecipesService) { }

  ngOnInit(): void {

    this.dss.fetchRecipes().subscribe();

    // not necessary with routing
    // this.rs.recipeSelected.subscribe((recipe:Recipe) => {
    //   this.selectedRecipe = recipe;
    // });
  }

}
