import { markAsAread, setNotificationFilter } from './notificationActionCreators';

describe('notificationActionCreators action tests', () => {
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

describe('notificationActionCreators dispatch tests', () => {
  it('Verifies that markAsAread bound', () => {
    const dispatch = jest.fn();
    dispatch(markAsAread(1));
    expect(dispatch).toHaveBeenCalledWith({
      type: 'MARK_AS_READ',
      index: 1,
    });
  });

  it('Verifies that setNotificationFilter bound for default', () => {
    const dispatch = jest.fn();
    dispatch(setNotificationFilter('DEFAULT'));
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_TYPE_FILTER',
      filter: 'DEFAULT',
    });
  });

  it('Verifies that setNotificationFilter bound for urgent', () => {
    const dispatch = jest.fn();
    dispatch(setNotificationFilter('URGENT'));
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SET_TYPE_FILTER',
      filter: 'URGENT',
    });
  });
});
