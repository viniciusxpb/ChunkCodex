import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChunkButtonComponent } from './shared/ui/chunk-button/chunk-button.component';
import { ChunkContainerComponent } from './shared/ui/chunk-container/chunk-container.component';
import { CHUNK_PANEL_IMPORTS } from './shared/ui/chunk-panel/chunk-panel.imports';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    ChunkButtonComponent,
    ChunkContainerComponent,
    CHUNK_PANEL_IMPORTS,
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ChunkCodex');
}
