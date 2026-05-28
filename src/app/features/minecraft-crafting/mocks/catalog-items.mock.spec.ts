import { CATALOG_ITEMS_MOCK } from './catalog-items.mock';
import { ICON_ATLAS_MOCK } from './icon-atlas.mock';

describe('CATALOG_ITEMS_MOCK', () => {
  it('includes white wool backed by the mock atlas', () => {
    const item = CATALOG_ITEMS_MOCK.find((candidate) => candidate.id === 'minecraft:white_wool');

    expect(item).toBeDefined();
    expect(item?.displayName).toBe('La branca');
    expect(item?.type).toBe('block');
    expect(item?.icon).toBe(ICON_ATLAS_MOCK['minecraft:white_wool']);
    expect(item?.icon.x).toBe(272);
    expect(item?.icon.y).toBe(112);
  });
});
