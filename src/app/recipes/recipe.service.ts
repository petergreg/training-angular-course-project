import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('Spaghetti puttanesca',
                    'Great meal for the family',
                    'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe_images/recipe-image-legacy-id--197477_10.jpg?itok=akO9oB-b',
                    [
                        new Ingredient('Spaghetti', 1),
                        new Ingredient('Meat', 1)
                    ]),
        new Recipe('Cheesy broccoli pasta bake',
                    'Whip up this cheap, simple and satisfying',
                    'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/spaghetti-puttanesca_1.jpg',
                    [
                        new Ingredient('Pasta', 1),
                        new Ingredient('Broccoli', 1)
                    ]),        
        new Recipe('Chipotle sweet potato',
                    'Served with moreish cheddar dumplings',
                    'https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/recipe/recipe-image/2018/12/_-chipotle-sweet-potato.jpg?itok=svcHrzSn',
                    [
                        new Ingredient('Cheddar', 1),
                        new Ingredient('Sweet Potato', 2)
                    ])
    ];

    constructor(private shoppingListService: ShoppingListService) {
    }

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }

}