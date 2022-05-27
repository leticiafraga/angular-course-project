import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';
import { Recipe } from '../recipes/recipe.model';
import { RecipesService } from '../recipes/recipes.service';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  constructor(private httpClient: HttpClient, private rs: RecipesService,
    private auth: AuthService) { }

  storeRecipes() {
    const recipes = this.rs.getRecipes();
    this.httpClient.put('https://ng-course-f98a5-default-rtdb.firebaseio.com/recipes.json', recipes).subscribe(
      response => {
        this.fetchRecipes();
      }
    );
  }

  fetchRecipes() {
    return this.httpClient.get<Recipe[]>('https://ng-course-f98a5-default-rtdb.firebaseio.com/recipes.json').pipe(
        // prevent undefined ingredients
        // first map: rsjs operator
        map(recipes => {
          return recipes.map(recipe => {
            return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] }
          });
        }),
        tap(recipes => {
          this.rs.setRecipes(recipes);
        })
      )


  }
}
