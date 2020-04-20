import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';
import { useThemeContext } from '../../src/theme';

export default function SettingsIcon(props: IconProps) {
  const { colors } = useThemeContext();

  return (
    <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M9.908 3.721c.449-2.297 3.735-2.297 4.184 0a2.131 2.131 0 003.076 1.482c2.076-1.082 4.125 1.488 2.609 3.27a2.131 2.131 0 00.76 3.33c2.14.948 1.408 4.153-.931 4.078a2.131 2.131 0 00-2.13 2.67c.593 2.265-2.368 3.69-3.768 1.815a2.131 2.131 0 00-3.415 0c-1.401 1.876-4.362.45-3.77-1.815a2.131 2.131 0 00-2.129-2.67c-2.34.075-3.07-3.13-.93-4.078a2.131 2.131 0 00.76-3.33c-1.517-1.782.532-4.352 2.608-3.27a2.131 2.131 0 003.076-1.482z"
        stroke={!props.isFocused ? props.fillColor : null}
        strokeWidth={1.8}
        fill={props.isFocused ? props.fillColor : null}
      />
      <Path
        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        stroke={!props.isFocused ? props.fillColor : null}
        strokeWidth={1.8}
        fill={colors.INPUT_FIELD_COLOR}
      />
    </Svg>
  );
}
