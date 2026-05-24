import { Component, input } from '@angular/core';

export type ChunkTagTone =
  | 'default'
  | 'grass'
  | 'lapis'
  | 'diamond'
  | 'gold'
  | 'redstone'
  | 'dirt'
  | 'xp';

@Component({
  selector: 'chunk-tag',
  imports: [],
  templateUrl: './chunk-tag.component.html',
  styleUrl: './chunk-tag.component.scss',
  host: {
    class: 'chunk-tag',
    '[attr.data-tone]': 'tone()',
  },
})
export class ChunkTagComponent {
  readonly tone = input<ChunkTagTone>('default');
}
