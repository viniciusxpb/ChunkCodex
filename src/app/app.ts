import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemIconGridComponent } from './features/minecraft-crafting/components/item-icon-grid/item-icon-grid.component';
import { CRAFTING_RECIPES_MOCK } from './features/minecraft-crafting/mocks/crafting-recipes.mock';
import { CraftingRecipe } from './features/minecraft-crafting/models/crafting-recipe.model';
import { ChunkButtonComponent } from './shared/ui/chunk-button/chunk-button.component';
import { ChunkContainerComponent } from './shared/ui/chunk-container/chunk-container.component';
import { ChunkTagComponent } from './shared/ui/chunk-tag/chunk-tag.component';
import { ChunkTextComponent } from './shared/ui/chunk-text/chunk-text.component';
import { CHUNK_GRID_IMPORTS } from './shared/ui/chunk-grid/chunk-grid.imports';
import { CHUNK_PANEL_IMPORTS } from './shared/ui/chunk-panel/chunk-panel.imports';
import { CHUNK_INPUT_IMPORTS } from './shared/ui/chunk-input/chunk-input.imports';
import { CHUNK_CRAFTING_GRID_IMPORTS } from './shared/ui/chunk-crafting-grid/chunk-crafting-grid.imports';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ItemIconGridComponent,
    ChunkButtonComponent,
    ChunkContainerComponent,
    CHUNK_GRID_IMPORTS,
    ChunkTagComponent,
    ChunkTextComponent,
    CHUNK_INPUT_IMPORTS,
    CHUNK_PANEL_IMPORTS,
    CHUNK_CRAFTING_GRID_IMPORTS,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ChunkCodex');
  protected readonly diamondPickaxeRecipe = new CraftingRecipe(
    CRAFTING_RECIPES_MOCK['minecraft:diamond_pickaxe'],
  ).toChunkCraftingGridRecipe();
}
