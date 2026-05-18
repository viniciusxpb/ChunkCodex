import { Component, input } from '@angular/core';
import { ChunkInputTone } from '../chunk-input.component';

@Component({
  selector: 'chunk-input-hint',
  imports: [],
  templateUrl: './chunk-input-hint.component.html',
  styleUrl: './chunk-input-hint.component.scss',
  host: {
    class: 'chunk-input-hint',
    '[attr.data-tone]': 'tone()',
  },
})
export class ChunkInputHintComponent {
  readonly tone = input<ChunkInputTone>('default');
}
