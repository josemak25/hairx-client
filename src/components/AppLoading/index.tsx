import React from 'react';
import { Image } from 'react-native';
import { AppLoading as ExpoAppLoading } from 'expo';
import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

type FontType = { [name: string]: Font.FontSource };

export default function AppLoading({ setIsAppReady }) {
  const cacheImages = (images: number[]) => {
    return images.map(image => {
      return typeof image === 'string'
        ? Image.prefetch(image)
        : Asset.fromModule(image).downloadAsync();
    });
  };

  const cacheFonts = (fonts: FontType[]) => {
    return fonts.map(font => Font.loadAsync(font));
  };

  const loadAllAppAssets = async () => {
    const imageAssets = cacheImages([require('../../../assets/icon.png')]);

    const fontAssets = cacheFonts([
      {
        'jost-book': require('../../../assets/fonts/Jost-Book.otf')
      },
      {
        'jost-medium': require('../../../assets/fonts/Jost-Medium.otf')
      },
      {
        'cormorant-medium': require('../../../assets/fonts/Cormorant-Medium.ttf')
      },
      {
        'cormorant-regular': require('../../../assets/fonts/Cormorant-Regular.ttf')
      },
      {
        'cormorant-italic': require('../../../assets/fonts/Cormorant-Italic.ttf')
      }
    ]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  return (
    <ExpoAppLoading
      startAsync={loadAllAppAssets}
      onFinish={() => setIsAppReady(true)}
      onError={console.warn}
    />
  );
}
