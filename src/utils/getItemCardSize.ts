import { Dimensions } from 'react-native';
export const DEVICE = Dimensions.get('window');

type CardItem = { cardSize: number; numOfColumn: number };

const CARD_ITEM: CardItem = { cardSize: 200, numOfColumn: 2 };

if (DEVICE.width <= 414) {
  //Android smartphones
  //iPhone4/4S and iPhone5/5S
  //iPhone6/6S
  //iPhone6plus/6Splus

  CARD_ITEM.numOfColumn = CARD_ITEM.numOfColumn;
} else {
  // Android tabs
  // iPad

  CARD_ITEM.numOfColumn = Math.floor(DEVICE.width / CARD_ITEM.cardSize);
  CARD_ITEM.cardSize = CARD_ITEM.numOfColumn >= 2 ? 250 : CARD_ITEM.cardSize;
}

export default CARD_ITEM;
