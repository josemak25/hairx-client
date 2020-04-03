import 'styled-components';

// All app colors
enum COLORS {
  BD_DARK_COLOR = '#3b3b3b',
  BG_LIGHT_COLOR = '#FFFFFF',
  FONT_DARK_COLOR = '#3b3b3b',
  FONT_LIGHT_COLOR = '#FFFFFF',
  BG_YELLOW_COLOR = '#ffd5a2'
}

// All app font sizes
enum FONTS {
  SMALL_SIZE = 10,
  MEDIUM_SIZE = 12,
  LARGE_SIZE = 15,
  NOTOSANS_REGULAR = 'notosans-regular',
  NOTOSANS_BOLD = 'notosans-bold',
  FONT_WEIGHT_LIGHT = 200,
  FONT_WEIGHT_MEDIUM = 600,
  FONT_WEIGHT_HEAVY = 800
}

declare module 'styled-components' {
  export interface DefaultTheme {
    // All Global App Colors
    colors: {
      BD_DARK_COLOR: string;
      BG_LIGHT_COLOR: string;
      FONT_DARK_COLOR: string;
      FONT_LIGHT_COLOR: string;
      BG_YELLOW_COLOR: string;
    };

    // All Global App Font Sizes
    fonts: {
      SMALL_SIZE: number;
      MEDIUM_SIZE: number;
      LARGE_SIZE: number;
      NOTOSANS_REGULAR: string;
      NOTOSANS_BOLD: string;
      FONT_WEIGHT_LIGHT: number;
      FONT_WEIGHT_MEDIUM: number;
      FONT_WEIGHT_HEAVY: number;
    };
  }
}

// App theme
export const theme = { colors: COLORS, fonts: FONTS };
