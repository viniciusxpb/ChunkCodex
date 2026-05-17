import { booleanAttribute, Component, ElementRef, inject, input } from '@angular/core';

type ChunkButtonVariant = 'solid' | 'ghost' | 'outline';
type ChunkButtonTone = 'primary' | 'lapis' | 'danger';
type ChunkButtonSize = 'md' | 'sm';

@Component({
  selector: 'chunk-button',
  imports: [],
  templateUrl: './chunk-button.component.html',
  styleUrl: './chunk-button.component.scss',
  host: {
    class: 'chunk-button',
    role: 'button',
    '[attr.data-variant]': 'variant()',
    '[attr.data-tone]': 'tone()',
    '[attr.data-size]': 'size()',
    '[attr.data-disabled]': "disabled() ? '' : null",
    '[attr.aria-disabled]': "disabled() ? 'true' : null",
    '[attr.tabindex]': 'disabled() ? -1 : 0',
    '(click)': 'handleClick($event)',
    '(keydown)': 'handleKeydown($event)',
  },
})
export class ChunkButtonComponent {
  readonly variant = input<ChunkButtonVariant>('solid');
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
