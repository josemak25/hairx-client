import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function CartIcon(props: IconProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M8 10H5L3 21h18l-2-11h-3m-8 0V7a4 4 0 014-4v0a4 4 0 014 4v3m-8 0h8m-8 0v3m8-3v3"
        stroke={props.fillColor}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
