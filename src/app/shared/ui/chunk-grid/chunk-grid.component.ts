import { Component, input } from '@angular/core';

export type ChunkGridGap = 'sm' | 'md' | 'lg';

@Component({
  selector: 'chunk-grid',
  imports: [],
  templateUrl: './chunk-grid.component.html',
  styleUrl: './chunk-grid.component.scss',
  host: {
    class: 'chunk-grid',
    '[attr.data-gap]': 'gap() ?? null',
  },
})
export class ChunkGridComponent {
  readonly gap = input<ChunkGridGap>();
}
