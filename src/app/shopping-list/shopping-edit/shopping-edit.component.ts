import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('nameInput') nameInputRef: ElementRef;
  // @ViewChild('amountInput') amountInputRef: ElementRef;

  sub: Subscription;
  editMode = false;
  editedItemIndex: number;
  editedItem: Ingredient;
  @ViewChild('f') form: NgForm;

  constructor(private sls: ShoppingListService) { }

  ngOnInit(): void {
    this.sub = this.sls.startedEditing.subscribe(
      (index: number) => {
        this.editMode = true;
        this.editedItemIndex = index;
        this.editedItem = this.sls.getIngredient(index);

        this.form.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onAddItem(form: NgForm) {
    const value = form.value;
    const newIng = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.sls.updateIngredient(this.editedItemIndex, newIng);
    }
    else {
      this.sls.addIngredient(newIng);
    }
    this.clearForm();
  }

  // onAddItem() {
  //   const newIng = new Ingredient(this.nameInputRef.nativeElement.value,this.amountInputRef.nativeElement.value);
  //   this.sls.addIngredient(newIng);
  // }

  clearForm(){
    this.editMode = false;
    this.form.reset();
  }

  onDelete() {
    if (this.editMode) {
      this.sls.deleteIngredient(this.editedItemIndex);
    }
    this.clearForm();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
