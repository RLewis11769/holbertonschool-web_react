import {
  Map, merge, setIn, set,
} from 'immutable';
import {
  MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters,
} from '../actions/notificationActionTypes';
import { notificationsNormalizer } from '../schema/notifications';

export const defaultState = Map({
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
});

export default function courseReducer(action, state = defaultState) {
  // console.log(state.toJS());
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return ({
        undefined: notificationsNormalizer(action.data.map((notif) => (
          merge(notif, { isRead: false })
        ))),
      });
    case MARK_AS_READ:
      return {
        // Ideally should be state.filter but not working so always add default filter k/v to state
        filter: NotificationTypeFilters.DEFAULT,
        notifications: state.map((notif) => {
          // If specifying this id, mark it as read and return to caller function
          if (notif.id === action.index) {
            return setIn(notif, ['isRead'], true);
          }
          // If different id, add isRead: false and return to caller which will return all notifs
          return setIn(notif, ['isRead'], false);
        }),
      };
    case SET_TYPE_FILTER:
      // Add new filter property to state
      // I've clearly screwed up, there's already a filter property in state if normalized
      // If not normalized, adds, which is good, but not what expected???
      // And the Array is called notifications instead of data
      return set(state, 'filter', action.filter);
    default:
      return state;
  }
}
