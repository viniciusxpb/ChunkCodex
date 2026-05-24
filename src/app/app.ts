import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChunkButtonComponent } from './shared/ui/chunk-button/chunk-button.component';
import { ChunkContainerComponent } from './shared/ui/chunk-container/chunk-container.component';
import { ChunkTagComponent } from './shared/ui/chunk-tag/chunk-tag.component';
import { ChunkTextComponent } from './shared/ui/chunk-text/chunk-text.component';
import { CHUNK_PANEL_IMPORTS } from './shared/ui/chunk-panel/chunk-panel.imports';
import { CHUNK_INPUT_IMPORTS } from './shared/ui/chunk-input/chunk-input.imports';
import { ChunkCraftingGridComponent } from './shared/ui/chunk-crafting-grid/chunk-crafting-grid.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ChunkButtonComponent,
    ChunkContainerComponent,
    ChunkTagComponent,
    ChunkTextComponent,
    CHUNK_INPUT_IMPORTS,
    CHUNK_PANEL_IMPORTS,
    ChunkCraftingGridComponent,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ChunkCodex');
}
