import { markAsAread, setNotificationFilter } from './notificationActionCreators';

describe('notificationActionCreators tests', () => {
  // Tests for actions/notificationActionCreators and actions/notificationActionTypes

  it('Verifies that markAsAread function returns correct action', () => {
    expect(markAsAread(1)).toEqual({
      type: 'MARK_AS_READ',
      index: 1,
    });
  });

  it('Verifies that setNotificationFilter function returns correct action for default', () => {
    expect(setNotificationFilter('DEFAULT')).toEqual({
      type: 'SET_TYPE_FILTER',
      filter: 'DEFAULT',
    });
  });

  it('Verifies that setNotificationFilter function returns correct action for urgent', () => {
    expect(setNotificationFilter('URGENT')).toEqual({
      type: 'SET_TYPE_FILTER',
      filter: 'URGENT',
    });
  });
});
