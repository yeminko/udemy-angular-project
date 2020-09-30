import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addedIngredient = new EventEmitter<Ingredient>();
  constructor() { }

  onAdd(nameInput: HTMLInputElement, amountInput: HTMLInputElement) {
    const name = nameInput.value;
    const amount = Number.parseInt(amountInput.value);
    const ingredient = new Ingredient(name, amount);
    this.addedIngredient.emit(ingredient);
  }

  ngOnInit(): void {
  }

}
