/* eslint-disable object-curly-newline */
import { fetchNotifications, markAsAread, setNotificationFilter } from '../actions/notificationActionCreators';
import notificationReducer, { defaultState } from './notificationReducer';

const notificationsList = {
  data: [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' },
  ],
};

const fetchNotificationsReturn = {
  filter: 'DEFAULT',
  notifications: [
    { id: 1, isRead: false, type: 'default', value: 'New course available' },
    { id: 2, isRead: false, type: 'urgent', value: 'New resume available' },
    { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
  ],
};

const markedAsRead = {
  filter: 'DEFAULT',
  notifications: [
    { id: 1, isRead: false, type: 'default', value: 'New course available' },
    { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
    { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
  ],
};

const filteredNotifications = {
  filter: 'URGENT',
  notifications: [
    {
      id: 1,
      isRead: false,
      type: 'default',
      value: 'New course available',
    },
    {
      id: 2,
      isRead: false,
      type: 'urgent',
      value: 'New resume available',
    },
    {
      id: 3,
      isRead: false,
      type: 'urgent',
      value: 'New data available',
    },
  ],
};

describe('notificationReducer.js reducer tests', () => {
  it('Verifies that default state returns defined defaultState', () => {
    const action = {};
    expect(notificationReducer(action)).toEqual(defaultState);
  });

  it('Verifies that FETCH_NOTIFICATION_SUCCESS returns updated array', () => {
    const action = fetchNotifications(notificationsList.data);
    expect(notificationReducer(action)).toEqual(fetchNotificationsReturn);
  });

  it('Verifies that MARK_AS_READ type returns updated array at given index', () => {
    const action = {
      type: 'MARK_AS_READ',
      index: 2,
    };
    expect(notificationReducer(action, notificationsList.data)).toEqual(markedAsRead);
  });

  it('Verifies that markAsAread returns updated array at given index', () => {
    const action = markAsAread(2);
    expect(notificationReducer(action, notificationsList.data)).toEqual(markedAsRead);
  });

  it('Verifies that SET_TYPE_FILTER type returns updated array at given index', () => {
    const action = {
      type: 'SET_TYPE_FILTER',
      filter: 'URGENT',
    };
    expect(notificationReducer(action, notificationsList.data)).toEqual(filteredNotifications);
  });

  it('Verifies that setNotificationFilter returns updated array at given index', () => {
    const action = setNotificationFilter('URGENT');
    expect(notificationReducer(action, notificationsList.data)).toEqual(filteredNotifications);
  });
});
