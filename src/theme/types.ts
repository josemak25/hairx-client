import 'styled-components';

// All app colors
enum COLORS {
  BG_LIGHT_GOLD_COLOR = '#FFFDD3',
  BG_LIGHT_BLUE_COLOR = '#D3E7FF',
  BG_LIGHT_PINK_COLOR = '#FFE0F7',
  BG_WHITE_COLOR = '#FFFFFF',
  FONT_DARK_COLOR = '#000000',
  FONT_LIGHT_COLOR = '#FFFFFF',
  FONT_DARK_GOLD_COLOR = '#BAB200',
  FACEBOOK_COLOR = '#4267B2',
  GOOGLE_COLOR = '#D44638',
  BUTTON_DARK_COLOR = '#3B3B3B',
  BUTTON_LIGHT_COLOR = '#F4F4F4',
  BUTTON_DARK_GRAY_COLOR = '#242424',
  INPUT_FIELD_COLOR = '#F7F7F7',
  INACTIVE_FIELD_COLOR = '#707070',
  FONT_RED_COLOR = '#FF0B0B',
  BACK_BUTTON_BG_COLOR = '#494039',
  BG_DARK_BLUE_COLOR = '#0856B4',
  BG_RED_COLOR = '#B40808',
  BG_LIGHT_LEMON_COLOR = '#E0FFEE',
  INACTIVE_FIELD_COLOR_LOW_OPACITY = 'rgba(112, 112, 112, 0.3)',
  ACTIVE_ICON_COLOR = '#BAB200',
  FONT_BLUE_COLOR = '#2D6BB5',
  BG_BLUE_GREEN_COLOR = '#A8DDE2',
  BG_LIGHT_GRAY = '#F4F4F4',
  BG_DARK_BLUE_GREEN_COLOR = '#83B8BD'
}

// All app font sizes
enum FONTS {
  SMALL_SIZE = 10,
  MEDIUM_SIZE = 12,
  LARGE_SIZE = 15,
  JOST_BOOK = 'jost-book',
  JOST_MEDIUM = 'jost-medium',
  CORMORANT_MEDIUM = 'cormorant-medium',
  CORMORANT_REGULAR = 'cormorant-regular',
  CORMORANT_ITALIC = 'cormorant-italic',
  FONT_WEIGHT_LIGHT = '200',
  FONT_WEIGHT_MEDIUM = '600',
  FONT_WEIGHT_HEAVY = '800'
}

declare module 'styled-components' {
  export interface DefaultTheme {
    // All Global App Colors
    colors: {
      BG_LIGHT_GOLD_COLOR: string;
      BG_LIGHT_BLUE_COLOR: string;
      BG_LIGHT_PINK_COLOR: string;
      BG_WHITE_COLOR: string;
      FONT_DARK_COLOR: string;
      FONT_LIGHT_COLOR: string;
      FONT_DARK_GOLD_COLOR: string;
      FACEBOOK_COLOR: string;
      GOOGLE_COLOR: string;
      BUTTON_DARK_COLOR: string;
      BUTTON_LIGHT_COLOR: string;
      BUTTON_DARK_GRAY_COLOR: string;
      INPUT_FIELD_COLOR: string;
      INACTIVE_FIELD_COLOR: string;
      INACTIVE_FIELD_COLOR_LOW_OPACITY: string;
      ACTIVE_ICON_COLOR: string;
      FONT_RED_COLOR: string;
      BACK_BUTTON_BG_COLOR: string;
      BG_DARK_BLUE_COLOR: string;
      BG_RED_COLOR: string;
      BG_LIGHT_LEMON_COLOR: string;
      BG_BLUE_GREEN_COLOR: string;
      FONT_BLUE_COLOR: string;
      BG_LIGHT_GRAY: string;
      BG_DARK_BLUE_GREEN_COLOR: string;
    };

    // All Global App Font Sizes
    fonts: {
      SMALL_SIZE: number;
      MEDIUM_SIZE: number;
      LARGE_SIZE: number;
      JOST_BOOK: string;
      JOST_MEDIUM: string;
      CORMORANT_MEDIUM: string;
      CORMORANT_REGULAR: string;
      CORMORANT_ITALIC: string;
      FONT_WEIGHT_LIGHT: string;
      FONT_WEIGHT_MEDIUM: string;
      FONT_WEIGHT_HEAVY: string;
    };
  }
}

// App theme
export const theme = { colors: COLORS, fonts: FONTS };
