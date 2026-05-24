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
  },
})
export class ChunkGridElementComponent {
  readonly size = input<ChunkGridElementSize>('1');
}
