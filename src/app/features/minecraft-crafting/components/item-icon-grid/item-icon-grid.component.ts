import { AsyncPipe, NgFor } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CatalogItemDto } from '../../models/catalog-item.model';
import { CraftingCatalogMockApiService } from '../../services/crafting-catalog-mock-api.service';

@Component({
  selector: 'minecraft-item-icon-grid',
  imports: [AsyncPipe, NgFor],
  templateUrl: './item-icon-grid.component.html',
  styleUrl: './item-icon-grid.component.scss',
})
export class ItemIconGridComponent {
  private readonly mockApi = inject(CraftingCatalogMockApiService);

  protected readonly items$ = this.mockApi.getItems();

  protected trackByItemId(_index: number, item: CatalogItemDto): string {
    return item.id;
  }
}
