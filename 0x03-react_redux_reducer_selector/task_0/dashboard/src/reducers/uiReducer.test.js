import { displayNotificationDrawer } from '../actions/uiActionCreators';
import uiReducer, { initialState } from './uiReducer';

describe('uiReducer.js reducer tests', () => {
  it('Verifies that state does not change when no action.type passed', () => {
    const action = {};
    const state = {};
    expect(uiReducer(action, state)).toEqual(state);
  });

  it('Verifies that state does not change when SELECT_COURSE action passed', () => {
    const action = { type: 'SELECT_COURSE' };
    expect(uiReducer(action, initialState)).toEqual(initialState);
  });

  it('Verifies that isNotificationDrawerVisible state changes when DISPLAY_NOTIFICATION_DRAWER passed', () => {
    const action = { type: 'DISPLAY_NOTIFICATION_DRAWER' };
    expect(uiReducer(action, initialState)).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });

  it('Verifies that isNotificationDrawerVisible state changes when DISPLAY_NOTIFICATION_DRAWER action passed', () => {
    const action = displayNotificationDrawer();
    expect(uiReducer(action, initialState)).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });
});
