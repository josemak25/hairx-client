import * as React from 'react';
import Svg, { Path, Ellipse } from 'react-native-svg';
import { IconProps } from './types';

export default function ProfileIcon(props: IconProps) {
  return (
    <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <Ellipse
        cx={12}
        cy={6.5}
        rx={4.5}
        ry={5}
        stroke={!props.isFocused ? props.fillColor : null}
        strokeWidth={1.8}
        fill={props.isFocused ? props.fillColor : null}
      />
      <Path
        d="M21 19c0 3.038-4.582 2-9 2s-9 1.038-9-2c0-3.038 4.582-5.5 9-5.5s9 2.462 9 5.5z"
        stroke={!props.isFocused ? props.fillColor : null}
        strokeWidth={1.8}
        fill={props.isFocused ? props.fillColor : null}
      />
    </Svg>
  );
}
