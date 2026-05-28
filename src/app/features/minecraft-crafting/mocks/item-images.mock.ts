import { ItemImageDto } from '../models';

export const ITEM_IMAGES_MOCK: Record<string, ItemImageDto> = {
  'white-bed': {
    id: 'white-bed',
    label: 'Cama branca',
    src: 'assets/mock/images/white-bed-n.png',
    alt: 'Cama branca em perspectiva isometrica',
    width: 400,
    height: 400,
  },
};
