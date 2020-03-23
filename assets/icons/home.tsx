import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
import { IconProps } from './types';

export default function HomeIcon(props: IconProps) {
  const { fillColor, isFocused } = props;

  return (
    <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M21.5 19v-6.123c0-1.423 0-2.135-.182-2.791a5 5 0 00-.783-1.616c-.402-.55-.96-.99-2.078-1.872l-1.5-1.184c-1.77-1.399-2.656-2.098-3.636-2.366a5 5 0 00-2.642 0c-.98.268-1.865.967-3.636 2.366l-1.5 1.184C4.426 7.48 3.867 7.92 3.465 8.47a5 5 0 00-.783 1.616c-.182.656-.182 1.368-.182 2.79V19c0 .932 0 1.398.152 1.765a2 2 0 001.083 1.083C4.102 22 4.568 22 5.5 22h.875c.116 0 .174 0 .223-.002a2 2 0 001.9-1.9c.002-.049.002-.107.002-.223V17a3.5 3.5 0 117 0v2.875c0 .116 0 .174.002.223a2 2 0 001.9 1.9c.049.002.107.002.223.002h.875c.932 0 1.398 0 1.765-.152a2 2 0 001.083-1.083c.152-.367.152-.833.152-1.765z"
        stroke={!isFocused ? fillColor : null}
        strokeWidth={1.8}
        fill={isFocused ? fillColor : null}
      />
    </Svg>
  );
}
