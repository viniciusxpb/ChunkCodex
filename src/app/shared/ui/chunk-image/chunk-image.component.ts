import { booleanAttribute, Component, input } from '@angular/core';

export type ChunkImageAspect = 'auto' | 'square' | 'wide';
export type ChunkImageFit = 'contain' | 'cover';
export type ChunkImagePadding = 'none' | 'sm' | 'md' | 'lg';
export type ChunkImageRendering = 'auto' | 'pixelated';
export type ChunkImageSize = 'sm' | 'md' | 'lg' | 'full';

export interface ChunkImageSource {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

@Component({
  selector: 'chunk-image',
  imports: [],
  templateUrl: './chunk-image.component.html',
  styleUrl: './chunk-image.component.scss',
  host: {
    class: 'chunk-image',
    '[attr.data-aspect]': 'aspect()',
    '[attr.data-fit]': 'fit()',
    '[attr.data-framed]': "framed() ? '' : null",
    '[attr.data-padding]': 'padding()',
    '[attr.data-rendering]': 'rendering()',
    '[attr.data-size]': 'size()',
  },
})
export class ChunkImageComponent {
  readonly image = input.required<ChunkImageSource>();
  readonly aspect = input<ChunkImageAspect>('square');
  readonly fit = input<ChunkImageFit>('contain');
  readonly framed = input(true, { transform: booleanAttribute });
  readonly padding = input<ChunkImagePadding>('md');
  readonly rendering = input<ChunkImageRendering>('auto');
  readonly size = input<ChunkImageSize>('md');
}
