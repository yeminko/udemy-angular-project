import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service'

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  ingredients: Ingredient [];
  private igChangeSub: Subscription;

  constructor(
    private shoppingListService: ShoppingListService
  ) { }

  onEditItem(index: number) {
    this.shoppingListService.startEditing.next(index);
  }

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    this.igChangeSub = this.shoppingListService.ingredientChanged.subscribe( (data: Ingredient[]) => this.ingredients = data);
  }

  ngOnDestroy(){
    this.igChangeSub.unsubscribe();
  }

}
