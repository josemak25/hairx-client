import { theme } from '../theme/types';

// App header custom style
export const customHeaderStyle = {
  borderBottomWidth: 0,
  elevation: 0,
  shadowOpacity: 0,
  backgroundColor: theme.colors.BG_WHITE_COLOR
};

// App HeaderBack button styles
export const headerBackTitleStyle = {
  fontFamily: theme.fonts.CORMORANT_REGULAR,
  color: theme.colors.FONT_DARK_COLOR,
  fontSize: theme.fonts.MEDIUM_SIZE,
  textTransform: 'capitalize'
};

// App Card size
export const RESPONSIVE_CARD_SIZES = { cardSize: 200, numOfColumn: 2 };

export const FACEBOOK_APP_ID = '278917806624947';
export const FACEBOOK_APP_NAME = 'HairX';

export const GOOGLE_CLIENT_ID_ANDROID =
  '119774000148-cd6ecn0e2suev24dnsp54r93a02bd3ha.apps.googleusercontent.com';
export const GOOGLE_CLIENT_ID_IOS =
  '119774000148-fadcm88ec754d85hsr89r0l3of4bqeu3.apps.googleusercontent.com';
