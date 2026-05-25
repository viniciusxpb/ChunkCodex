import { Component, input } from '@angular/core';
import { ChunkCraftingGridItem } from '../chunk-crafting-grid.model';

type ChunkCraftingGridItemVariant = 'slot' | 'result';

@Component({
  selector: 'chunk-crafting-grid-item',
  imports: [],
  templateUrl: './chunk-crafting-grid-item.component.html',
  styleUrl: './chunk-crafting-grid-item.component.scss',
  host: {
    class: 'chunk-crafting-grid-item',
    '[attr.data-variant]': 'variant()',
    '[attr.aria-label]': 'item().label',
  },
})
export class ChunkCraftingGridItemComponent {
  readonly item = input.required<ChunkCraftingGridItem>();
  readonly variant = input<ChunkCraftingGridItemVariant>('slot');
}
