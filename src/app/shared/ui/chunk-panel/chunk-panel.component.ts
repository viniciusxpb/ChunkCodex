import { Component, input } from '@angular/core';

type ChunkPanelPadding = 'sm' | 'md' | 'lg';

@Component({
  selector: 'chunk-panel',
  imports: [],
  templateUrl: './chunk-panel.component.html',
  styleUrl: './chunk-panel.component.scss',
  host: {
    class: 'chunk-panel',
    '[attr.data-padding]': 'padding()',
  },
})
export class ChunkPanelComponent {
  readonly padding = input<ChunkPanelPadding>('md');
}
