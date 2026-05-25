import { TestBed } from '@angular/core/testing';
import { ChunkCraftingGridItemComponent } from './chunk-crafting-grid-item.component';

describe('ChunkCraftingGridItemComponent', () => {
  it('renders an atlas icon from the item input', () => {
    TestBed.configureTestingModule({
      imports: [ChunkCraftingGridItemComponent],
    });

    const fixture = TestBed.createComponent(ChunkCraftingGridItemComponent);

    fixture.componentRef.setInput('item', {
      id: 'minecraft:diamond',
      label: 'Diamante',
      icon: {
        atlasUrl: 'assets/mock/minecraft/icons-atlas.png',
        x: 304,
        y: 1744,
        width: 16,
        height: 16,
      },
    });
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;
    const icon = element.querySelector<HTMLElement>('.chunk-crafting-grid-item__icon');

    expect(element.getAttribute('aria-label')).toBe('Diamante');
    expect(icon?.style.backgroundImage).toContain('icons-atlas.png');
    expect(icon?.style.backgroundPosition).toBe('-304px -1744px');
  });
});
