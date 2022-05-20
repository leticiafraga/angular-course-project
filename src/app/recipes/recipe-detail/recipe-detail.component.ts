import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipeDetails: Recipe;
  id: number;

  constructor(private rs: RecipesService, private route: ActivatedRoute,
    private router: Router, private dss: DataStorageService) { }

  ngOnInit(): void {
    const id = this.route.params.subscribe(
      (params: Params) => {
        // cast to int
        this.id = +params['id'];
        this.recipeDetails = this.rs.getRecipe(this.id);
      }
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.route });

  }

  sendToShoppingList(): void {
    this.rs.sendToShoppingList(this.recipeDetails.ingredients);

  }

  onDeleteRecipe() {
    this.rs.deleteRecipe(this.id);
    this.router.navigate(['../'], { relativeTo: this.route });
    this.dss.storeRecipes();
  }
}
