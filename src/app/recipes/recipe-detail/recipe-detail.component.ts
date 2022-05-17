import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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

  constructor(private rs: RecipesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.route.params.subscribe(
      (params:Params) => {
        // cast to int
        this.id = +params['id'];
        this.recipeDetails = this.rs.getRecipe(this.id);
      }
    );
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});

  }

  sendToShoppingList(): void {
    this.rs.sendToShoppingList(this.recipeDetails.ingredients);

  }

}
