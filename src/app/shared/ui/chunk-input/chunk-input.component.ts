import { booleanAttribute, Component, input } from '@angular/core';

export type ChunkInputTone = 'default' | 'danger';

@Component({
  selector: 'chunk-input',
  imports: [],
  templateUrl: './chunk-input.component.html',
  styleUrl: './chunk-input.component.scss',
  host: {
    class: 'chunk-input',
    '[attr.data-disabled]': "disabled() ? '' : null",
    '[attr.data-tone]': 'tone()',
  },
})
export class ChunkInputComponent {
  readonly disabled = input(false, { transform: booleanAttribute });
  readonly tone = input<ChunkInputTone>('default');
}
