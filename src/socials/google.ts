import * as Google from 'expo-google-app-auth';
import { GOOGLE_CLIENT_ID_ANDROID, GOOGLE_CLIENT_ID_IOS } from '../constants';
import { IAuthData } from '../screens/signup/social_signup';

export const googleLogin = async () => {
  const data: IAuthData = { type: '', token: '', userData: {}, error: '' };

  try {
    const result = await Google.logInAsync({
      androidClientId: GOOGLE_CLIENT_ID_ANDROID,
      iosClientId: GOOGLE_CLIENT_ID_IOS,
      scopes: ['profile', 'email']
    });

    if (result.type === 'success') {
      data.token = result.accessToken;
      data.userData = result.user;
    }

    data.type = result.type;
  } catch (e) {
    data.error = e.message;
  }

  return data;
};
