import { combineReducers } from 'redux';
import { Map } from 'immutable';
import courseReducer from './courseReducer';
import notificationReducer, { defaultState } from './notificationReducer';
import uiReducer, { initialState } from './uiReducer';

const rootReducer = combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});

export const reducerState = {
  courses: Map([]),
  notifications: defaultState,
  ui: initialState,
};

export default rootReducer;
