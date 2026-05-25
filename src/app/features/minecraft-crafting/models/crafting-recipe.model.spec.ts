import { CRAFTING_RECIPES_MOCK } from '../mocks/crafting-recipes.mock';
import { CraftingRecipe } from './crafting-recipe.model';

describe('CraftingRecipe', () => {
  it('maps a shaped recipe pattern to the expected 3x3 slot positions', () => {
    const recipe = new CraftingRecipe(CRAFTING_RECIPES_MOCK['minecraft:diamond_pickaxe']);

    expect(recipe.slots.map((slot) => slot?.item?.id ?? null)).toEqual([
      'minecraft:diamond',
      'minecraft:diamond',
      'minecraft:diamond',
      null,
      'minecraft:stick',
      null,
      null,
      'minecraft:stick',
      null,
    ]);
  });

  it('creates the chunk crafting input model with atlas-backed items', () => {
    const gridRecipe = new CraftingRecipe(
      CRAFTING_RECIPES_MOCK['minecraft:diamond_pickaxe'],
    ).toChunkCraftingGridRecipe();

    expect(gridRecipe.result?.id).toBe('minecraft:diamond_pickaxe');
    expect(gridRecipe.slots[0]?.icon?.atlasUrl).toBe('assets/mock/minecraft/icons-atlas.png');
  });
});
