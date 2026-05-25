import { MinecraftAtlasIconDto } from './minecraft-atlas-icon.model';

export interface MinecraftItemDto {
  id: string;
  namespace: string;
  name: string;
  displayName: string;
  type: 'item' | 'block' | 'tool' | 'weapon' | 'material' | 'food';
  stackSize: number;
  icon: MinecraftAtlasIconDto;
}
