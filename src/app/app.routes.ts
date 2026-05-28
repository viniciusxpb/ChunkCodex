import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/design-system-showcase').then(
        (component) => component.DesignSystemShowcaseComponent,
      ),
    title: 'ChunkCodex',
  },
  {
    path: 'crafting-recipes/create',
    loadComponent: () =>
      import('@app/features/crafting-recipe').then(
        (component) => component.CreateCraftingRecipeComponent,
      ),
    title: 'Create Crafting Recipe',
  },
];
