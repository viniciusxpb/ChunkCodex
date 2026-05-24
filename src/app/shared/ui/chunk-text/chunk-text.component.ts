import { Component, input } from '@angular/core';

export type ChunkTextType = 'h1' | 'h2' | 'h3' | 'body' | 'lead' | 'small' | 'mono' | 'meta';

@Component({
  selector: 'chunk-text',
  imports: [],
  templateUrl: './chunk-text.component.html',
  styleUrl: './chunk-text.component.scss',
  host: {
    class: 'chunk-text',
    '[attr.data-type]': 'type()',
  },
})
export class ChunkTextComponent {
  readonly type = input<ChunkTextType>('body');
}
