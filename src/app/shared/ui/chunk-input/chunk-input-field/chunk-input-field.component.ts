import { Component, computed, inject, input } from '@angular/core';
import { ChunkInputComponent } from '../chunk-input.component';

@Component({
  selector: 'chunk-input-field',
  imports: [],
  templateUrl: './chunk-input-field.component.html',
  styleUrl: './chunk-input-field.component.scss',
  host: {
    class: 'chunk-input-field',
    '[attr.data-disabled]': "disabled() ? '' : null",
    '[attr.data-tone]': 'tone()',
  },
})
export class ChunkInputFieldComponent {
  readonly placeholder = input<string>('');

  private readonly parent = inject(ChunkInputComponent, { optional: true });

  readonly disabled = computed(() => this.parent?.disabled() ?? false);
  readonly tone = computed(() => this.parent?.tone() ?? 'default');
}
