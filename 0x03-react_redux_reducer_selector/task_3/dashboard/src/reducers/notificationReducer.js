import {
  MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters,
} from '../actions/notificationActionTypes';

export const defaultState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
};

export default function courseReducer(action, state = defaultState) {
  switch (action.type) {
    case FETCH_NOTIFICATIONS_SUCCESS:
      return {
        // Add new filter property to state
        filter: NotificationTypeFilters.DEFAULT,
        // Add new notifications property to state and add isRead property to each notification
        notifications: action.data.map((notif) => ({
          ...notif,
          isRead: false,
        })),
      };
    case MARK_AS_READ:
      return {
        // Ideally should be state.filter but not working so always add default filter k/v to state
        filter: NotificationTypeFilters.DEFAULT,
        notifications: state.map((notif) => {
          // If specifying this id, mark it as read and return to caller function
          if (notif.id === action.index) {
            return {
              ...notif,
              isRead: true,
            };
          }
          // Else add isRead: false and return notif
          return {
            ...notif,
            isRead: false,
          };
        }),
      };
    case SET_TYPE_FILTER:
      // filter by action.filter
      return {
        filter: action.filter,
        notifications: state.map((notif) => ({
          ...notif,
          isRead: false,
        })),
      };
    default:
      return state;
  }
}
