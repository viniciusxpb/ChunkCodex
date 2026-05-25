import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MinecraftItemDto } from '../../models/minecraft-item.model';
import { MinecraftMockApiService } from '../../services/minecraft-mock-api.service';

@Component({
  selector: 'minecraft-item-icon-grid',
  imports: [AsyncPipe, NgFor],
  templateUrl: './item-icon-grid.component.html',
  styleUrl: './item-icon-grid.component.scss',
})
export class ItemIconGridComponent {
  private readonly minecraftMockApi = inject(MinecraftMockApiService);

  protected readonly items$ = this.minecraftMockApi.getItems();

  protected trackByItemId(_index: number, item: MinecraftItemDto): string {
    return item.id;
  }
}
