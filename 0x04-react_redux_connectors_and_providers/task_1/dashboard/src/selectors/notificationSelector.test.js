/* eslint-disable object-curly-newline */
import { filterTypeSelected, getNotifications, getUnreadNotifications } from './notificationSelector';

const initialState = {
  notifications: [
    { id: 1, isRead: true, type: 'default', value: 'New course available' },
    { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
    { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
  ],
  filter: 'DEFAULT',
};

const notifications = [
  { id: 1, isRead: true, type: 'default', value: 'New course available' },
  { id: 2, isRead: true, type: 'urgent', value: 'New resume available' },
  { id: 3, isRead: false, type: 'urgent', value: 'New data available' },
];

describe('notificationSelector', () => {
  it('Verifies filterTypeSelected returns filter type', () => {
    const result = filterTypeSelected(initialState);
    expect(result).toEqual('DEFAULT');
  });

  it('Verifies getNotifications returns all notifications', () => {
    const result = getNotifications(initialState);
    expect(result).toEqual(notifications);
  });

  it('Verifies getUnreadNotifications returns notifications where isRead is false', () => {
    const result = getUnreadNotifications(initialState);
    expect(result).toEqual([{ id: 3, isRead: false, type: 'urgent', value: 'New data available' }]);
  });
});
