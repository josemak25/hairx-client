import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function BackButtonIcon(props: IconProps) {
  return (
    <Svg width="30%" height="30%" viewBox="0 0 23.007 17.515" {...props}>
      <Path
        d="M7.382 15.757l-5.625-7m0 0l5.625-7m-5.625 7h20"
        fill="none"
        stroke="#5d6969"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.5}
      />
    </Svg>
  );
}
