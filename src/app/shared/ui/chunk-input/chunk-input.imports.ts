import { ChunkInputComponent } from './chunk-input.component';
import { ChunkInputFieldComponent } from './chunk-input-field/chunk-input-field.component';
import { ChunkInputHintComponent } from './chunk-input-hint/chunk-input-hint.component';
import { ChunkInputTitleComponent } from './chunk-input-title/chunk-input-title.component';

export * from './chunk-input.component';
export * from './chunk-input-title/chunk-input-title.component';
export * from './chunk-input-field/chunk-input-field.component';
export * from './chunk-input-hint/chunk-input-hint.component';

export const CHUNK_INPUT_IMPORTS = [
  ChunkInputComponent,
  ChunkInputTitleComponent,
  ChunkInputFieldComponent,
  ChunkInputHintComponent,
] as const;
