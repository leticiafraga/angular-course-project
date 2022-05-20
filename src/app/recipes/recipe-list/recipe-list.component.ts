import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

  recipes: Recipe[];
  subscription: Subscription;

  constructor(private rs: RecipesService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipes = this.rs.getRecipes();
    this.subscription = this.rs.recipesChanged.subscribe((r: Recipe[]) => {
      this.recipes = r;
    }
    );
    // console.log("Recipe list", this.rs.getRecipes());
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
