export interface ChunkCraftingGridIcon {
  readonly atlasUrl: string;
  readonly x: number;
  readonly y: number;
  readonly width: number;
  readonly height: number;
}

export interface ChunkCraftingGridItem {
  readonly id: string;
  readonly label: string;
  readonly icon?: ChunkCraftingGridIcon;
  readonly count?: number;
}

export interface ChunkCraftingGridRecipe {
  readonly id: string;
  readonly slots: readonly (ChunkCraftingGridItem | null)[];
  readonly result: ChunkCraftingGridItem | null;
}

export interface ChunkCraftingGridSlot {
  readonly position: number;
  readonly row: number;
  readonly column: number;
  readonly item: ChunkCraftingGridItem | null;
}

const CHUNK_CRAFTING_GRID_SIZE = 9;
const CHUNK_CRAFTING_GRID_COLUMNS = 3;

export const EMPTY_CHUNK_CRAFTING_GRID_RECIPE: ChunkCraftingGridRecipe = {
  id: 'chunk:empty_crafting_grid',
  slots: [],
  result: null,
};

export class ChunkCraftingGridViewModel {
  readonly id: string;
  readonly slots: readonly ChunkCraftingGridSlot[];
  readonly result: ChunkCraftingGridItem | null;

  constructor(recipe: ChunkCraftingGridRecipe) {
    this.id = recipe.id;
    this.slots = this.normalizeSlots(recipe.slots);
    this.result = recipe.result;
  }

  private normalizeSlots(
    slots: readonly (ChunkCraftingGridItem | null)[],
  ): ChunkCraftingGridSlot[] {
    return Array.from({ length: CHUNK_CRAFTING_GRID_SIZE }, (_, position) => ({
      position,
      row: Math.floor(position / CHUNK_CRAFTING_GRID_COLUMNS),
      column: position % CHUNK_CRAFTING_GRID_COLUMNS,
      item: slots[position] ?? null,
    }));
  }
}
