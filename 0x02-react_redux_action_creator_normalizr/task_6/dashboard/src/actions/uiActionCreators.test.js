import {
  login, logout, displayNotificationDrawer, hideNotificationDrawer,
} from './uiActionCreators';

describe('uiActionCreators tests', () => {
  // Tests for actions/uiActionCreators and actions/uiActionTypes

  it('Verifies that login function returns correct action', () => {
    const action = login('email', 'password');
    expect(action).toEqual({
      type: 'LOGIN',
      user: {
        email: 'email',
        password: 'password',
      },
    });
  });

  it('Verifies that logout function returns correct action', () => {
    expect(logout()).toEqual({
      type: 'LOGOUT',
    });
  });

  it('Verifies that displayNotificationDrawer function returns correct action', () => {
    expect(displayNotificationDrawer()).toEqual({
      type: 'DISPLAY_NOTIFICATION_DRAWER',
    });
  });

  it('Verifies that hideNotificationDrawer function returns correct action', () => {
    expect(hideNotificationDrawer()).toEqual({
      type: 'HIDE_NOTIFICATION_DRAWER',
    });
  });
});
