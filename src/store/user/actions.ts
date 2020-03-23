import {
  USER_TYPES,
  UserAction,
  UserResponseInterface,
  USER_ACTION_TYPES
} from './types';

const actionStarted = () => ({ type: USER_TYPES.STARTED });

const registrationSuccess = (payload: UserResponseInterface): UserAction => ({
  type: USER_TYPES.REGISTER_USER_SUCCESS,
  payload
});

const loginSuccess = (payload: UserResponseInterface): UserAction => ({
  type: USER_TYPES.LOGIN_USER_SUCCESS,
  payload
});

const profileSetupSuccess = (payload: UserResponseInterface): UserAction => ({
  type: USER_TYPES.COMPLETE_PROFILE,
  payload
});

const forgotPasswordSuccess = (): UserAction => {
  return {
    type: USER_TYPES.FORGOT_PASSWORD
  };
};

const onError = (error: string): UserAction => ({
  type: USER_TYPES.ERROR,
  payload: error
});

export default function userActions(type: string) {
  return async (dispatch: any, payload: any) => {
    // To unsubscribe to these update, just use the functions:
  };
}
