import {
  ChunkCraftingGridIcon,
  ChunkCraftingGridItem,
  ChunkCraftingGridRecipe,
} from '../../../shared/ui/chunk-crafting-grid/chunk-crafting-grid.model';
import { MinecraftItemDto } from './minecraft-item.model';

export type ResourceLocation = `${string}:${string}`;
export type CraftingRecipeType = 'minecraft:crafting_shaped' | 'minecraft:crafting_shapeless';
export type CraftingRecipeCategory = 'building' | 'equipment' | 'misc' | 'redstone';
export type CraftingItemComponentMap = Readonly<Record<ResourceLocation, unknown>>;

export interface CraftingItemStackDto {
  readonly item: MinecraftItemDto;
  readonly count: number;
  readonly components?: CraftingItemComponentMap;
}

export interface CraftingRecipeIngredientDto {
  readonly item?: MinecraftItemDto;
  readonly tag?: ResourceLocation;
  readonly alternatives?: readonly CraftingRecipeIngredientDto[];
}

interface CraftingRecipeBaseDto {
  readonly id: ResourceLocation;
  readonly type: CraftingRecipeType;
  readonly group?: string;
  readonly category?: CraftingRecipeCategory;
  readonly showNotification?: boolean;
  readonly result: CraftingItemStackDto;
}

export interface ShapedCraftingRecipeDto extends CraftingRecipeBaseDto {
  readonly type: 'minecraft:crafting_shaped';
  readonly pattern: readonly string[];
  readonly key: Readonly<Record<string, CraftingRecipeIngredientDto>>;
}

export interface ShapelessCraftingRecipeDto extends CraftingRecipeBaseDto {
  readonly type: 'minecraft:crafting_shapeless';
  readonly ingredients: readonly CraftingRecipeIngredientDto[];
}

export type CraftingRecipeDto = ShapedCraftingRecipeDto | ShapelessCraftingRecipeDto;

export class CraftingRecipe {
  readonly id: ResourceLocation;
  readonly type: CraftingRecipeType;
  readonly result: CraftingItemStackDto;
  readonly slots: readonly (CraftingRecipeIngredientDto | null)[];

  constructor(private readonly recipe: CraftingRecipeDto) {
    this.id = recipe.id;
    this.type = recipe.type;
    this.result = recipe.result;
    this.slots = this.createSlots(recipe);
  }

  toChunkCraftingGridRecipe(): ChunkCraftingGridRecipe {
    return {
      id: this.id,
      slots: this.slots.map((slot) => this.ingredientToGridItem(slot)),
      result: this.stackToGridItem(this.result),
    };
  }

  private createSlots(recipe: CraftingRecipeDto): readonly (CraftingRecipeIngredientDto | null)[] {
    if (recipe.type === 'minecraft:crafting_shapeless') {
      return this.createShapelessSlots(recipe.ingredients);
    }

    return this.createShapedSlots(recipe.pattern, recipe.key);
  }

  private createShapelessSlots(
    ingredients: readonly CraftingRecipeIngredientDto[],
  ): readonly (CraftingRecipeIngredientDto | null)[] {
    return Array.from({ length: 9 }, (_, index) => ingredients[index] ?? null);
  }

  private createShapedSlots(
    pattern: readonly string[],
    key: Readonly<Record<string, CraftingRecipeIngredientDto>>,
  ): readonly (CraftingRecipeIngredientDto | null)[] {
    return Array.from({ length: 9 }, (_, position) => {
      const row = Math.floor(position / 3);
      const column = position % 3;
      const symbol = pattern[row]?.charAt(column) ?? ' ';

      return symbol === ' ' ? null : (key[symbol] ?? null);
    });
  }

  private ingredientToGridItem(
    ingredient: CraftingRecipeIngredientDto | null,
  ): ChunkCraftingGridItem | null {
    const item = this.resolveIngredientItem(ingredient);

    return item ? this.itemToGridItem(item) : null;
  }

  private stackToGridItem(stack: CraftingItemStackDto): ChunkCraftingGridItem {
    return this.itemToGridItem(stack.item, stack.count);
  }

  private resolveIngredientItem(
    ingredient: CraftingRecipeIngredientDto | null,
  ): MinecraftItemDto | null {
    if (!ingredient) {
      return null;
    }

    if (ingredient.item) {
      return ingredient.item;
    }

    return ingredient.alternatives?.find((alternative) => alternative.item)?.item ?? null;
  }

  private itemToGridItem(item: MinecraftItemDto, count?: number): ChunkCraftingGridItem {
    return {
      id: item.id,
      label: item.displayName,
      icon: this.iconToGridIcon(item),
      count,
    };
  }

  private iconToGridIcon(item: MinecraftItemDto): ChunkCraftingGridIcon {
    return {
      atlasUrl: item.icon.atlasUrl,
      x: item.icon.x,
      y: item.icon.y,
      width: item.icon.width,
      height: item.icon.height,
    };
  }
}
