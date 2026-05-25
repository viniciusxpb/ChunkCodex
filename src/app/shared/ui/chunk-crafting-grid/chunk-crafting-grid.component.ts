import { Component, computed, input } from '@angular/core';
import {
  ChunkCraftingGridRecipe,
  ChunkCraftingGridSlot,
  ChunkCraftingGridViewModel,
  EMPTY_CHUNK_CRAFTING_GRID_RECIPE,
} from './chunk-crafting-grid.model';
import { ChunkCraftingGridEmptyComponent } from './chunk-crafting-grid-empty/chunk-crafting-grid-empty.component';
import { ChunkCraftingGridItemComponent } from './chunk-crafting-grid-item/chunk-crafting-grid-item.component';

@Component({
  selector: 'chunk-crafting-grid',
  imports: [ChunkCraftingGridItemComponent, ChunkCraftingGridEmptyComponent],
  templateUrl: './chunk-crafting-grid.component.html',
  styleUrl: './chunk-crafting-grid.component.scss',
  host: {
    class: 'chunk-crafting-grid',
    role: 'group',
    'aria-label': 'Grade de craft',
  },
})
export class ChunkCraftingGridComponent {
  readonly recipe = input<ChunkCraftingGridRecipe>(EMPTY_CHUNK_CRAFTING_GRID_RECIPE);

  protected readonly viewModel = computed(() => new ChunkCraftingGridViewModel(this.recipe()));
  protected readonly craftingSlots = computed(() => this.viewModel().slots);
  protected readonly result = computed(() => this.viewModel().result);

  protected trackSlot(_index: number, slot: ChunkCraftingGridSlot): number {
    return slot.position;
  }
}
