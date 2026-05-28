import { Component } from '@angular/core';
import { CHUNK_SHARED_UI_IMPORTS } from '@app/shared/ui';

@Component({
  selector: 'chunk-app-header',
  imports: [CHUNK_SHARED_UI_IMPORTS],
  templateUrl: './app-header.component.html',
  styleUrl: './app-header.component.scss',
})
export class AppHeaderComponent {}
