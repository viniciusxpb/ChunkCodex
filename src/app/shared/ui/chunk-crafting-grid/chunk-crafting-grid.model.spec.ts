import { ChunkCraftingGridViewModel } from './chunk-crafting-grid.model';

describe('ChunkCraftingGridViewModel', () => {
  it('normalizes recipes to exactly nine grid slots', () => {
    const item = { id: 'minecraft:stick', label: 'Graveto' };
    const viewModel = new ChunkCraftingGridViewModel({
      id: 'minecraft:test',
      slots: [item, null, item],
      result: item,
    });

    expect(viewModel.slots).toHaveLength(9);
    expect(viewModel.slots[0]).toEqual({ position: 0, row: 0, column: 0, item });
    expect(viewModel.slots[1]?.item).toBeNull();
    expect(viewModel.slots[2]?.item).toBe(item);
    expect(viewModel.slots[8]).toEqual({ position: 8, row: 2, column: 2, item: null });
  });
});
