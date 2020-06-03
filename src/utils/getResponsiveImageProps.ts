import { Dimensions } from 'react-native';

export default function getResponsiveImageProps() {
  const imageWidth = Math.floor(
    Dimensions.get('screen').width <= 375
      ? Dimensions.get('screen').width / 3.2
      : Dimensions.get('screen').width / 4
  );

  const imageHeight = Math.floor(
    Dimensions.get('screen').width <= 375 ? imageWidth + 50 : imageWidth + 20
  );

  return { imageWidth, imageHeight };
}
