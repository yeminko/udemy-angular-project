import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This is simply test 1',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', 
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe(
      'A Test Recipe 2', 
      'This is simply test 2', 
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', 
      [
        new Ingredient('Meat', 2),
        new Ingredient('French Fries', 22)
      ]),
    new Recipe(
      'A Test Recipe 3', 
      'This is simply test 3', 
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg', 
      [
        new Ingredient('Meat', 4),
        new Ingredient('French Fries', 10)
      ]),
  ];

  constructor() { }

  getRecipes() {
    return this.recipes.slice();
  }
}
