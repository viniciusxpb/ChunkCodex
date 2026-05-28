import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppFooterComponent, AppHeaderComponent } from '@app/layout';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppHeaderComponent, AppFooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
