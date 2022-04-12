// import configureStore from 'redux-mock-store';
// import fetchMock from 'fetch-mock';
// import thunk from 'redux-thunk';
import {
  login, logout,
  displayNotificationDrawer, hideNotificationDrawer,
} from './uiActionCreators';

describe('uiActionCreators action tests', () => {
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

describe('uiActionCreators dispatch tests', () => {
  it('Verifies that login bound', () => {
    const dispatch = jest.fn();
    dispatch(login('email', 'password'));
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOGIN',
      user: {
        email: 'email',
        password: 'password',
      },
    });
  });

  it('Verifies that logout bound', () => {
    const dispatch = jest.fn();
    dispatch(logout());
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOGOUT',
    });
  });

  it('Verifies that displayNotificationDrawer bound', () => {
    const dispatch = jest.fn();
    dispatch(displayNotificationDrawer());
    expect(dispatch).toHaveBeenCalledWith({
      type: 'DISPLAY_NOTIFICATION_DRAWER',
    });
  });

  it('Verifies that hideNotificationDrawer bound', () => {
    const dispatch = jest.fn();
    dispatch(hideNotificationDrawer());
    expect(dispatch).toHaveBeenCalledWith({
      type: 'HIDE_NOTIFICATION_DRAWER',
    });
  });

  // it.skip('Verifies that API call returns correct action', () => {
  //   const middlewares = [thunk];
  //   const mockStore = configureStore(middlewares);
  //   const store = mockStore({});
  //   fetchMock.mock('/login-success.json');
  //   return store.dispatch(loginRequest('email', 'password'))
  //     .then(() => {
  //       const actions = store.getActions();
  //       expect(actions[0]).toEqual({
  //         type: 'LOGIN',
  //         user: {
  //           email: 'email',
  //           password: 'password',
  //         },
  //       });
  //       expect(actions[1]).toEqual({
  //         type: 'LOGIN_SUCCESS',
  //       });
  //     });
  // });
});
