import { ChunkButtonComponent } from './chunk-button/chunk-button.component';
import { ChunkContainerComponent } from './chunk-container/chunk-container.component';
import { CHUNK_CRAFTING_GRID_IMPORTS } from './chunk-crafting-grid/chunk-crafting-grid.imports';
import { CHUNK_GRID_IMPORTS } from './chunk-grid/chunk-grid.imports';
import { ChunkImageComponent } from './chunk-image/chunk-image.component';
import { CHUNK_INPUT_IMPORTS } from './chunk-input/chunk-input.imports';
import { CHUNK_PANEL_IMPORTS } from './chunk-panel/chunk-panel.imports';
import { ChunkTagComponent } from './chunk-tag/chunk-tag.component';
import { ChunkTextComponent } from './chunk-text/chunk-text.component';

export * from './chunk-button/chunk-button.component';
export * from './chunk-container/chunk-container.component';
export * from './chunk-crafting-grid/chunk-crafting-grid.imports';
export * from './chunk-grid/chunk-grid.imports';
export * from './chunk-image/chunk-image.component';
export * from './chunk-input/chunk-input.imports';
export * from './chunk-panel/chunk-panel.imports';
export * from './chunk-tag/chunk-tag.component';
export * from './chunk-text/chunk-text.component';

export const CHUNK_SHARED_UI_IMPORTS = [
  ChunkButtonComponent,
  ChunkContainerComponent,
  ...CHUNK_CRAFTING_GRID_IMPORTS,
  ...CHUNK_GRID_IMPORTS,
  ChunkImageComponent,
  ...CHUNK_INPUT_IMPORTS,
  ...CHUNK_PANEL_IMPORTS,
  ChunkTagComponent,
  ChunkTextComponent,
] as const;
