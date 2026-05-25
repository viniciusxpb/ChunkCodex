import { TestBed } from '@angular/core/testing';
import { ChunkCraftingGridComponent } from './chunk-crafting-grid.component';
import { ChunkCraftingGridItem, ChunkCraftingGridRecipe } from './chunk-crafting-grid.model';

describe('ChunkCraftingGridComponent', () => {
  it('renders the recipe input as nine crafting slots plus a result slot', () => {
    TestBed.configureTestingModule({
      imports: [ChunkCraftingGridComponent],
    });

    const item: ChunkCraftingGridItem = {
      id: 'minecraft:diamond',
      label: 'Diamante',
    };
    const recipe: ChunkCraftingGridRecipe = {
      id: 'minecraft:test',
      slots: [item],
      result: item,
    };

    const fixture = TestBed.createComponent(ChunkCraftingGridComponent);
    fixture.componentRef.setInput('recipe', recipe);
    fixture.detectChanges();

    const element = fixture.nativeElement as HTMLElement;

    expect(element.querySelectorAll('chunk-crafting-grid-item')).toHaveLength(2);
    expect(element.querySelectorAll('chunk-crafting-grid-empty')).toHaveLength(8);
  });
});
