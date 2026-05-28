import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  CRAFTING_RECIPES_MOCK,
  CraftingCatalogMockApiService,
  CraftingRecipe,
  ItemIconGridComponent,
} from '@app/features/minecraft-crafting';
import { CHUNK_SHARED_UI_IMPORTS } from '@app/shared/ui';

@Component({
  imports: [ItemIconGridComponent, CHUNK_SHARED_UI_IMPORTS],
  templateUrl: './design-system-showcase.component.html',
  styleUrl: './design-system-showcase.component.scss',
})
export class DesignSystemShowcaseComponent {
  private readonly mockApi = inject(CraftingCatalogMockApiService);

  protected readonly itemImage = toSignal(this.mockApi.getItemImageById('white-bed'), {
    initialValue: null,
  });
  protected readonly diamondPickaxeRecipe = new CraftingRecipe(
    CRAFTING_RECIPES_MOCK['minecraft:diamond_pickaxe'],
  ).toChunkCraftingGridRecipe();
  protected readonly bedRecipe = new CraftingRecipe(
    CRAFTING_RECIPES_MOCK['minecraft:bed'],
  ).toChunkCraftingGridRecipe();
}
