import { AtlasIconDto } from './atlas-icon.model';

export interface CatalogItemDto {
  id: string;
  namespace: string;
  name: string;
  displayName: string;
  type: 'item' | 'block' | 'tool' | 'weapon' | 'material' | 'food';
  stackSize: number;
  icon: AtlasIconDto;
}
