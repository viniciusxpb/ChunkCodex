import { ChunkContentComponent } from './chunk-content/chunk-content.component';
import { ChunkPanelComponent } from './chunk-panel.component';
import { ChunkTitleComponent } from './chunk-title/chunk-title.component';

export * from './chunk-panel.component';
export * from './chunk-title/chunk-title.component';
export * from './chunk-content/chunk-content.component';

export const CHUNK_PANEL_IMPORTS = [
  ChunkPanelComponent,
  ChunkTitleComponent,
  ChunkContentComponent,
] as const;
