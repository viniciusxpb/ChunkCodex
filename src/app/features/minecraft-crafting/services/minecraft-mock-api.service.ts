import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CRAFTING_RECIPES_MOCK } from '../mocks/crafting-recipes.mock';
import { MINECRAFT_ITEMS_MOCK } from '../mocks/minecraft-items.mock';
import {
  CraftingItemStackDto,
  CraftingRecipeDto,
  CraftingRecipeIngredientDto,
} from '../models/crafting-recipe.model';
import { MinecraftItemDto } from '../models/minecraft-item.model';

@Injectable({
  providedIn: 'root',
})
export class MinecraftMockApiService {
  private readonly latencyMs = 250;

  getItems(): Observable<MinecraftItemDto[]> {
    return of(MINECRAFT_ITEMS_MOCK.map((item) => this.cloneItem(item))).pipe(delay(this.latencyMs));
  }

  getItemById(id: string): Observable<MinecraftItemDto | null> {
    const item = MINECRAFT_ITEMS_MOCK.find((candidate) => candidate.id === id);

    return of(item ? this.cloneItem(item) : null).pipe(delay(this.latencyMs));
  }

  getCraftingRecipes(): Observable<CraftingRecipeDto[]> {
    const recipes = Object.values(CRAFTING_RECIPES_MOCK).map((recipe) =>
      this.cloneCraftingRecipe(recipe),
    );

    return of(recipes).pipe(delay(this.latencyMs));
  }

  getCraftingRecipeById(id: string): Observable<CraftingRecipeDto | null> {
    const recipe = CRAFTING_RECIPES_MOCK[id];

    return of(recipe ? this.cloneCraftingRecipe(recipe) : null).pipe(delay(this.latencyMs));
  }

  private cloneItem(item: MinecraftItemDto): MinecraftItemDto {
    return {
      ...item,
      icon: {
        ...item.icon,
      },
    };
  }

  private cloneCraftingRecipe(recipe: CraftingRecipeDto): CraftingRecipeDto {
    if (recipe.type === 'minecraft:crafting_shaped') {
      return {
        ...recipe,
        pattern: [...recipe.pattern],
        key: Object.fromEntries(
          Object.entries(recipe.key).map(([symbol, ingredient]) => [
            symbol,
            this.cloneIngredient(ingredient),
          ]),
        ),
        result: this.cloneStack(recipe.result),
      };
    }

    return {
      ...recipe,
      ingredients: recipe.ingredients.map((ingredient) => this.cloneIngredient(ingredient)),
      result: this.cloneStack(recipe.result),
    };
  }

  private cloneIngredient(ingredient: CraftingRecipeIngredientDto): CraftingRecipeIngredientDto {
    return {
      ...ingredient,
      item: ingredient.item ? this.cloneItem(ingredient.item) : undefined,
      alternatives: ingredient.alternatives?.map((alternative) =>
        this.cloneIngredient(alternative),
      ),
    };
  }

  private cloneStack(stack: CraftingItemStackDto): CraftingItemStackDto {
    return {
      ...stack,
      item: this.cloneItem(stack.item),
      components: stack.components ? { ...stack.components } : undefined,
    };
  }
}
