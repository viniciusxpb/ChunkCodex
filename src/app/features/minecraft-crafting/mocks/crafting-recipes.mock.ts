import {
  CraftingItemStackDto,
  CraftingRecipeDto,
  CraftingRecipeIngredientDto,
  ResourceLocation,
} from '../models/crafting-recipe.model';
import { CatalogItemDto } from '../models/catalog-item.model';
import { CATALOG_ITEMS_MOCK } from './catalog-items.mock';

function getItem(id: ResourceLocation): CatalogItemDto {
  const item = CATALOG_ITEMS_MOCK.find((candidate) => candidate.id === id);

  if (!item) {
    throw new Error(`Catalog item mock not found: ${id}`);
  }

  return item;
}

function ingredient(id: ResourceLocation): CraftingRecipeIngredientDto {
  return {
    item: getItem(id),
  };
}

function stack(id: ResourceLocation, count = 1): CraftingItemStackDto {
  return {
    item: getItem(id),
    count,
  };
}

export const CRAFTING_RECIPES_MOCK: Record<string, CraftingRecipeDto> = {
  'minecraft:diamond_pickaxe': {
    id: 'minecraft:diamond_pickaxe',
    type: 'minecraft:crafting_shaped',
    category: 'equipment',
    pattern: ['DDD', ' S ', ' S '],
    key: {
      D: ingredient('minecraft:diamond'),
      S: ingredient('minecraft:stick'),
    },
    result: stack('minecraft:diamond_pickaxe'),
  },
    'minecraft:bed': {
    id: 'minecraft:bed',
    type: 'minecraft:crafting_shaped',
    category: 'building',
    pattern: [' ', 'WWW','PPP'],
    key: {
      P: ingredient('minecraft:oak_planks'),
      W: ingredient('minecraft:white_wool'),
    },
    result: stack('minecraft:crafting_table'),
  },
  'minecraft:crafting_table': {
    id: 'minecraft:crafting_table',
    type: 'minecraft:crafting_shaped',
    category: 'building',
    pattern: ['PP', 'PP'],
    key: {
      P: ingredient('minecraft:oak_planks'),
    },
    result: stack('minecraft:crafting_table'),
  },
};
