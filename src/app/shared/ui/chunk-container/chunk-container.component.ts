import { booleanAttribute, Component, ElementRef, inject, input } from '@angular/core';

type ChunkButtonVariant = 'solid' | 'ghost' | 'outline';
type ChunkButtonTone = 'primary' | 'lapis' | 'danger';
type ChunkButtonSize = 'md' | 'sm';
type ChunkButtonPadding = 'sm' | 'md' | 'lg';

@Component({
  selector: 'chunk-container',
  imports: [],
  templateUrl: './chunk-container.component.html',
  styleUrl: './chunk-container.component.scss',
  host: {
    class: 'chunk-container',
    role: 'button',
    '[attr.data-variant]': 'variant()',
    '[attr.data-padding]': 'padding()',
    '[attr.data-tone]': 'tone()',
    '[attr.data-size]': 'size()',
    '[attr.data-disabled]': "disabled() ? '' : null",
    '[attr.aria-disabled]': "disabled() ? 'true' : null",
    '[attr.tabindex]': 'disabled() ? -1 : 0',
    '(click)': 'handleClick($event)',
    '(keydown)': 'handleKeydown($event)',
  },
})
export class ChunkContainerComponent {
  readonly variant = input<ChunkButtonVariant>('solid');
  readonly padding = input<ChunkButtonPadding>('sm');
  readonly tone = input<ChunkButtonTone>('primary');
  readonly size = input<ChunkButtonSize>('md');
  readonly disabled = input(false, { transform: booleanAttribute });

  private readonly elementRef = inject<ElementRef<HTMLElement>>(ElementRef);

  protected handleClick(event: MouseEvent): void {
    if (!this.disabled()) {
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();
  }

  protected handleKeydown(event: KeyboardEvent): void {
    if (this.disabled()) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }

    if (event.key !== 'Enter' && event.key !== ' ') {
      return;
    }

    event.preventDefault();
    this.elementRef.nativeElement.click();
  }
}
