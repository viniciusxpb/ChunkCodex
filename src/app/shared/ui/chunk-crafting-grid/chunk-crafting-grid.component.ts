import { Component } from '@angular/core';

@Component({
  selector: 'chunk-crafting-grid',
  imports: [],
  templateUrl: './chunk-crafting-grid.component.html',
  styleUrl: './chunk-crafting-grid.component.scss',
  host: {
    class: 'chunk-crafting-grid',
  },
})
export class ChunkCraftingGridComponent {
  protected readonly craftingSlots = Array.from({ length: 9 }, (_, index) => index + 1);
  protected readonly resultSlots = Array.from({ length: 2 }, (_, index) => index + 1);
}
