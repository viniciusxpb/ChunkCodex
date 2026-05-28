import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { CATALOG_ITEMS_MOCK, CRAFTING_RECIPES_MOCK, ITEM_IMAGES_MOCK } from '../mocks';
import {
  CatalogItemDto,
  CraftingItemStackDto,
  CraftingRecipeDto,
  CraftingRecipeIngredientDto,
  ItemImageDto,
} from '../models';

@Injectable({
  providedIn: 'root',
})
export class CraftingCatalogMockApiService {
  private readonly latencyMs = 250;

  getItems(): Observable<CatalogItemDto[]> {
    return of(CATALOG_ITEMS_MOCK.map((item) => this.cloneItem(item))).pipe(delay(this.latencyMs));
  }

  getItemById(id: string): Observable<CatalogItemDto | null> {
    const item = CATALOG_ITEMS_MOCK.find((candidate) => candidate.id === id);

    return of(item ? this.cloneItem(item) : null).pipe(delay(this.latencyMs));
  }

  getItemImageById(id: string): Observable<ItemImageDto | null> {
    const image = ITEM_IMAGES_MOCK[id];

    return of(image ? this.cloneItemImage(image) : null).pipe(delay(this.latencyMs));
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

  private cloneItem(item: CatalogItemDto): CatalogItemDto {
    return {
      ...item,
      icon: {
        ...item.icon,
      },
    };
  }

  private cloneItemImage(image: ItemImageDto): ItemImageDto {
    return { ...image };
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
