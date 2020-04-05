import * as React from 'react';
import Svg, { Path, LinearGradient, Stop } from 'react-native-svg';
import { useThemeContext } from '../../src/theme';
import { IconProps } from './types';

export default function MailIcon(props: IconProps) {
  const { colors } = useThemeContext();
  return (
    <Svg viewBox="0 0 512 512" width="40%" height="40%" {...props}>
      <Path
        d="M469.333 64H42.667C19.135 64 0 83.135 0 106.667v298.667C0 428.865 19.135 448 42.667 448h426.667C492.865 448 512 428.865 512 405.333V106.667C512 83.135 492.865 64 469.333 64z"
        fill={colors.ACTIVE_TAB_COLOR}
      />
      <Path
        d="M320.322 255.225c55.418-50.393 140.868-128.57 169.151-154.456.564 1.91 1.194 3.807 1.194 5.897v298.667c0 1.971-.624 3.746-1.126 5.56-28.508-27.187-113.985-108.226-169.219-155.668z"
        fill={colors.BG_LIGHT_COLOR}
      />
      <Path
        d="M469.333 85.333c1.572 0 2.957.573 4.432.897-36.939 33.807-159.423 145.859-202.286 184.478-3.354 3.021-8.76 6.625-15.479 6.625s-12.125-3.604-15.49-6.635C197.652 232.085 75.161 120.027 38.228 86.232c1.478-.324 2.866-.898 4.439-.898h426.666z"
        fill={colors.BG_LIGHT_COLOR}
      />
      <Path
        d="M22.46 410.893c-.503-1.814-1.126-3.589-1.126-5.56V106.667c0-2.09.63-3.986 1.194-5.896C50.8 126.647 136.264 204.831 191.68 255.224 136.443 302.671 50.957 383.719 22.46 410.893z"
        fill={colors.BG_LIGHT_COLOR}
      />
      <Path
        d="M42.667 426.667c-1.704 0-3.219-.594-4.81-.974 29.447-28.072 115.477-109.586 169.742-156.009a7980.773 7980.773 0 0018.63 16.858c8.792 7.938 19.083 12.125 29.771 12.125s20.979-4.188 29.76-12.115a8178.815 8178.815 0 0018.641-16.868c54.268 46.418 140.286 127.926 169.742 156.009-1.591.38-3.104.974-4.81.974H42.667z"
        fill={colors.BG_LIGHT_COLOR}
      />
      <LinearGradient
        id="prefix__a"
        gradientUnits="userSpaceOnUse"
        x1={-40.175}
        y1={647.233}
        x2={-21.961}
        y2={629.019}
        gradientTransform="matrix(21.3333 0 0 -21.3333 996.333 13791.667)"
      >
        <Stop offset={0} stopOpacity={0.2} />
        <Stop offset={1} stopOpacity={0} />
      </LinearGradient>
      <Path
        d="M183.807 262.049c2.663-2.318 5.329-4.642 7.872-6.826C136.262 204.83 50.799 126.646 22.527 100.77l161.28 161.279zM489.473 100.77C461.19 126.655 375.74 204.832 320.322 255.225c55.234 47.441 140.711 128.48 169.219 155.668.503-1.814 1.126-3.589 1.126-5.56V106.667c0-2.09-.631-3.987-1.194-5.897zM285.76 286.552c-8.781 7.927-19.073 12.115-29.76 12.115s-20.979-4.188-29.771-12.125a7980.773 7980.773 0 01-18.63-16.858c-2.793 2.389-5.72 4.926-8.669 7.49l149.495 149.493h120.909c1.706 0 3.219-.594 4.81-.974-29.456-28.083-115.474-109.591-169.742-156.009a8156.367 8156.367 0 01-18.642 16.868z"
        fill="url(#prefix__a)"
      />
      <LinearGradient
        id="prefix__b"
        gradientUnits="userSpaceOnUse"
        x1={-47.411}
        y1={640.41}
        x2={-21.995}
        y2={628.558}
        gradientTransform="matrix(21.3333 0 0 -21.3333 996.333 13791.667)"
      >
        <Stop offset={0} stopColor="#fff" stopOpacity={0.2} />
        <Stop offset={1} stopColor="#fff" stopOpacity={0} />
      </LinearGradient>
      <Path
        d="M469.333 64H42.667C19.135 64 0 83.135 0 106.667v298.667C0 428.865 19.135 448 42.667 448h426.667C492.865 448 512 428.865 512 405.333V106.667C512 83.135 492.865 64 469.333 64z"
        fill="url(#prefix__b)"
      />
    </Svg>
  );
}