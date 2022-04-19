import {
  MARK_AS_READ, SET_TYPE_FILTER, FETCH_NOTIFICATIONS_SUCCESS, NotificationTypeFilters,
} from './notificationActionTypes';

// Define creator functions that return actions based on action types
export const markAsAread = (index) => ({
  type: MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: SET_TYPE_FILTER,
  filter: NotificationTypeFilters[filter],
});

export const fetchNotifications = (data) => ({
  type: FETCH_NOTIFICATIONS_SUCCESS,
  data,
});
