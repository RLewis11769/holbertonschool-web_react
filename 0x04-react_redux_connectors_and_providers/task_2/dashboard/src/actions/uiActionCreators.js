// import fetch from 'node-fetch';
import {
  LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT,
  DISPLAY_NOTIFICATION_DRAWER, HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

// Define creator functions that return actions based on action types
export const login = (email, password) => ({
  type: LOGIN,
  user: {
    email,
    password,
  },
});

export const logout = () => ({
  type: LOGOUT,
});

export const displayNotificationDrawer = () => ({
  type: DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: HIDE_NOTIFICATION_DRAWER,
});

// Success/failure actions not bound to creator functions
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function loginFailure(error) {
  return {
    type: LOGIN_FAILURE,
    error,
  };
}

// Async action creator that returns function that dispatches actions
// Note: Normal function that returns function that takes dispatch as argument (for eslint)
export const loginRequest = (email, password) => async (dispatch) => {
  dispatch(login(email, password));
  const response = await fetch('./login-success.json');
  const json = await response.json();
  if (json.success) dispatch(loginSuccess());
  else dispatch(loginFailure());
};
