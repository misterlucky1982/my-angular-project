import {Recipe} from './recipe.model';
import {EventEmitter} from '@angular/core';

export class RecipeService{
  private recipes: Recipe[] = [
    new Recipe('Recipe A','first recipe', 'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/chorizo-mozarella-gnocchi-bake-cropped.jpg'),
    new Recipe('Recipe B','secondrecipe', 'https://joyfoodsunshine.com/wp-content/uploads/2016/09/easy-pizza-casserole-recipe-4-500x500.jpg')
  ];
  recipeSelected = new EventEmitter<Recipe>();

  getRecipes(){
    return this.recipes.slice();
  }
}
