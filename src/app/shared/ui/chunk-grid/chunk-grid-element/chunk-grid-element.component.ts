import { Component, input } from '@angular/core';

export type ChunkGridElementSize =
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12'
  | '13'
  | '14'
  | '15'
  | '16'
  | '17'
  | '18'
  | '19'
  | '20'
  | '21'
  | '22'
  | '23'
  | '24';

@Component({
  selector: 'chunk-grid-element',
  imports: [],
  templateUrl: './chunk-grid-element.component.html',
  styleUrl: './chunk-grid-element.component.scss',
  host: {
    class: 'chunk-grid-element',
    '[attr.data-size]': 'size()',
    '[attr.data-mobile]': 'mobile() ?? null',
    '[attr.data-desktop]': 'desktop() ?? null',
    '[style.--chunk-grid-element-size-input]': 'size()',
    '[style.--chunk-grid-element-mobile-input]': 'mobile() ?? null',
    '[style.--chunk-grid-element-desktop-input]': 'desktop() ?? null',
  },
})
export class ChunkGridElementComponent {
  readonly size = input<ChunkGridElementSize>('1');
  readonly mobile = input<ChunkGridElementSize>();
  readonly desktop = input<ChunkGridElementSize>();
}
