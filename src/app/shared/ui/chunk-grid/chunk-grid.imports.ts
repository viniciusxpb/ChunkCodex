import { ChunkGridComponent } from './chunk-grid.component';
import { ChunkGridElementComponent } from './chunk-grid-element/chunk-grid-element.component';

export * from './chunk-grid.component';
export * from './chunk-grid-element/chunk-grid-element.component';

export const CHUNK_GRID_IMPORTS = [ChunkGridComponent, ChunkGridElementComponent] as const;
