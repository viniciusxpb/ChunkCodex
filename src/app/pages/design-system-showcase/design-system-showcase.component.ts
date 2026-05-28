import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  CRAFTING_RECIPES_MOCK,
  CraftingCatalogMockApiService,
  CraftingRecipe,
  ItemIconGridComponent,
} from '@app/features/minecraft-crafting';
import {
  CHUNK_CRAFTING_GRID_IMPORTS,
  CHUNK_GRID_IMPORTS,
  CHUNK_INPUT_IMPORTS,
  CHUNK_PANEL_IMPORTS,
  ChunkButtonComponent,
  ChunkContainerComponent,
  ChunkImageComponent,
  ChunkTagComponent,
  ChunkTextComponent,
} from '@app/shared/ui';

@Component({
  imports: [
    ItemIconGridComponent,
    ChunkButtonComponent,
    ChunkContainerComponent,
    ChunkImageComponent,
    CHUNK_GRID_IMPORTS,
    ChunkTagComponent,
    ChunkTextComponent,
    CHUNK_INPUT_IMPORTS,
    CHUNK_PANEL_IMPORTS,
    CHUNK_CRAFTING_GRID_IMPORTS,
  ],
  templateUrl: './design-system-showcase.component.html',
  styleUrl: './design-system-showcase.component.scss',
})
export class DesignSystemShowcaseComponent {
  private readonly mockApi = inject(CraftingCatalogMockApiService);

  protected readonly itemImage = toSignal(this.mockApi.getItemImageById('white-bed'), {
    initialValue: null,
  });
  protected readonly diamondPickaxeRecipe = new CraftingRecipe(
    CRAFTING_RECIPES_MOCK['minecraft:diamond_pickaxe'],
  ).toChunkCraftingGridRecipe();
  protected readonly bedRecipe = new CraftingRecipe(
    CRAFTING_RECIPES_MOCK['minecraft:bed'],
  ).toChunkCraftingGridRecipe();
}
