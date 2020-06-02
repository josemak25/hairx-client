import * as Facebook from 'expo-facebook';
import { FACEBOOK_APP_ID, FACEBOOK_APP_NAME } from '../constants';

interface IData {
  type: string;
  token: string;
  userData: object;
  error: string;
}

export const facebookLogin = async () => {
  const data: IData = { type: '', token: '', userData: {}, error: '' };

  try {
    //First call this method to ensure facebook sdk is initialized properly
    await Facebook.initializeAsync(FACEBOOK_APP_ID, FACEBOOK_APP_NAME);

    //@ts-ignore
    const { type, token } = await Facebook.logInWithReadPermissionsAsync({
      permissions: ['public_profile']
    });

    if (type === 'success') {
      // Get the user's data using Facebook's Graph API
      const response = await fetch(
        `https://graph.facebook.com/me?access_token=${token}&fields=id,first_name,last_name,email,picture`
      );

      const resData = await response.json();
      data.userData = resData;
      data.token = token;
    }

    data.type = type;
  } catch (error) {
    data.error = error.message;
  }

  return data;
};
