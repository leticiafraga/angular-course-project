import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

  id: number;
  editMode = false;
  // reactive form
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private rs: RecipesService, private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })
  }

  private initForm() {
    let name = '';
    let desc = '';
    let imagePath = '';
    let ingredients = new FormArray([]);

    if (this.editMode) {
      const recipe = this.rs.getRecipe(this.id);
      name = recipe.name;
      desc = recipe.description;
      imagePath = recipe.imagePath;
      if (recipe['ingredients']) {
        for (let ing of recipe.ingredients) {

          ingredients.push(
            new FormGroup({
              'name': new FormControl(ing.name, Validators.required),
              'amount': new FormControl(ing.amount, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')]),
            }));
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(name, Validators.required),
      'imagePath': new FormControl(imagePath, Validators.required),
      'description': new FormControl(desc, Validators.required),
      'ingredients': ingredients
    });
  }

  onSubmit() {
    // console.log(this.recipeForm);

    const newRecipe = this.recipeForm.value;
    // const newRecipe = new Recipe(this.recipeForm.value['name'],
    //   this.recipeForm.value['description'],
    //   this.recipeForm.value['imagePath'],
    //   this.recipeForm.value['ingredients']);

    if (this.editMode) {
      this.rs.updateRecipe(this.id, newRecipe);
      this.router.navigate(['../'], { relativeTo: this.route });
    } else {
      const newId = this.rs.addRecipe(newRecipe);
      this.router.navigate(['../', newId], { relativeTo: this.route });
    }
  }

  get controls() {
    // console.log(this.recipeForm.get('ingredients')['controls'] as FormArray);
    return this.recipeForm.get('ingredients')['controls'] as FormArray;
  }

  onAddIngredient() {
    (this.recipeForm.get('ingredients') as FormArray).push(new FormGroup({
      'name': new FormControl(null),
      'amount': new FormControl(null, [Validators.required, Validators.pattern('^[1-9]+[0-9]*$')])
    }));
  }

  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  onDeleteIngredient(i: number) {
    console.log(this.recipeForm.get('ingredients') as FormArray);
    (this.recipeForm.get('ingredients') as FormArray).removeAt(i);
  }
}