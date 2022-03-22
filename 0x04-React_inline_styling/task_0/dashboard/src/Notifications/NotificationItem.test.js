import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';

describe('NotificationItem component', () => {
  // Tests for NotificationItem component in NotificationItem.js

  it('Verifies that renders NotificationItem component without crashing', () => {
    shallow(<NotificationItem />);
  });

  // Props tests
  it('Verifies that renders NotificationItem with value props passed in', () => {
    const wrapper = shallow(<NotificationItem type="default" value="test" />);
    expect(wrapper.props().dataPriority === 'default');
    expect(wrapper.props().dataValue === 'test');
  });

  it('Verifies that renders NotificationItem with html props passed in', () => {
    const wrapper = shallow(
      <NotificationItem type="urgent" html={{ __html: '<u>test</u>' }} />,
    );
    expect(wrapper.props().dataPriority === 'urgent');
    expect(wrapper.props().dataValue === 'test');
    expect(wrapper.props().html === '<u>test</u>');
  });

  // markAsRead tests
  const listNotifications = [
    { id: 1, type: 'urgent', value: 'Value 1' },
    { id: 2, type: 'default', html: { __html: 'HTML 1' } },
  ];
  it('Verifies that markAsRead called with correct ID', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    const spy = jest.spyOn(wrapper.instance(), 'markAsRead');
    wrapper.find('NotificationItem').get(0).props.markAsRead(1);
    expect(spy).toHaveBeenCalledWith(1);
    wrapper.find('NotificationItem').get(1).props.markAsRead(2);
    expect(spy).toHaveBeenCalledWith(2);
  });
});
