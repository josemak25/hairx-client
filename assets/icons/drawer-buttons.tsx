import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

interface DrawerButtonsProps extends IconProps {
  buttonState: boolean;
}

export function DrawerButtons(props: DrawerButtonsProps) {
  return (
    <Svg width="20%" height="20%" viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        d={
          props.buttonState
            ? 'M5 5l7 7m0 0l7 7m-7-7l7-7m-7 7l-7 7'
            : 'M2 12.5h20M2 17.5h14M2 7.5h20'
        }
        stroke={props.fillColor}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
