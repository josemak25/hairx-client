import React, { useState, Fragment } from 'react';
import Animated, { Easing } from 'react-native-reanimated';
import ContentLoader from 'react-native-skeleton-content';

import applyScale from '../../utils/applyScale';
import { Image } from './styles';

const ProgressiveImage = Animated.createAnimatedComponent(Image);

type ResponsiveImageProps = {
  width?: number;
  height?: number;
  resizeMode?: string;
  style?: any;
  imageUrl: string;
  offlineImage?: object;
  testID?: string;
  imageFadeDuration?: number;
  thumbnailSource?: string;
  thumbnailFadeDuration?: number;
  thumbnailBlurRadius?: number;
  onLoadStart?(T: void): void;
  onLoad?(T: void): void;
  onError?(T: void): void;
  onLoadEnd?(T: void): void;
};

export default function ResponsiveImage(props: ResponsiveImageProps) {
  const [animation, setAnimation] = useState({
    imageOpacity: new Animated.Value(0),
    thumbnailOpacity: new Animated.Value(0),
    hideContentLoader: true
  });

  const width = applyScale(props.width) || 250;
  const height = applyScale(props.height) || 250;
  const resizeMode = props.resizeMode || 'cover';

  const thumbnailFadeDuration = props.thumbnailFadeDuration || 250;
  const imageFadeDuration = props.imageFadeDuration || 250;
  const thumbnailBlurRadius = props.thumbnailBlurRadius || 3;
  const thumbnailSource = props.thumbnailSource || props.imageUrl;
  const onlineImage = { uri: props.imageUrl, cache: 'force-cache' };

  const onLoadThumbnail = () => {
    Animated.timing(animation.thumbnailOpacity, {
      toValue: 1,
      duration: thumbnailFadeDuration,
      easing: Easing.ease
    }).start();
  };

  const onLoadImage = () => {
    Animated.timing(animation.imageOpacity, {
      toValue: 1,
      duration: imageFadeDuration,
      easing: Easing.ease
    }).start();
    if (props.onLoad) props.onLoad();
  };

  const handleImageLoading = () => {
    setAnimation({ ...animation, hideContentLoader: false });
    onLoadThumbnail();
  };

  return (
    <Fragment>
      <ContentLoader
        isLoading={animation.hideContentLoader}
        containerStyle={{ width, height }}
        layout={[{ width, height }]}
      />
      <ProgressiveImage
        style={[{ width, height, resizeMode }, props.style]}
        source={{ uri: thumbnailSource, cache: 'force-cache' }}
        onLoadStart={() => (props.onLoadStart ? props.onLoadStart() : null)}
        onProgress={() => (props.onLoadStart ? props.onLoadStart() : null)}
        onLoad={handleImageLoading}
        onError={() => (props.onError ? props.onError() : null)}
        onLoadEnd={() => (props.onLoadEnd ? props.onLoadEnd() : null)}
        blurRadius={thumbnailBlurRadius}
        testID="image-thumbnail"
      />

      <ProgressiveImage
        style={[
          { width, height, resizeMode },
          { opacity: animation.imageOpacity },
          props.style
        ]}
        source={props.offlineImage ? props.offlineImage : onlineImage}
        onLoadStart={() => (props.onLoadStart ? props.onLoadStart() : null)}
        onProgress={() => (props.onLoadStart ? props.onLoadStart() : null)}
        onLoad={onLoadImage}
        onError={() => (props.onError ? props.onError() : null)}
        onLoadEnd={() => (props.onLoadEnd ? props.onLoadEnd() : null)}
        testID="image-data"
      />
    </Fragment>
  );
}
