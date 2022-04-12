import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import NotificationItem from './NotificationItem';
import Notifications from './Notifications';

describe('NotificationItem component', () => {
  // Tests for NotificationItem component in NotificationItem.js

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const listNotifications = [
    { id: 1, type: 'urgent', value: 'Value 1' },
    { id: 2, type: 'default', html: { __html: 'HTML 1' } },
  ];

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

  // markNotificationAsRead tests
  it('Verifies that markNotificationAsRead called', () => {
    // Mock markNotificationAsRead function
    const markNotificationAsRead = jest.fn();
    const wrapper = shallow(<NotificationItem />);
    wrapper.setProps({ markNotificationAsRead });
    wrapper.find('li').props().onClick();
    expect(markNotificationAsRead).toBeCalledTimes(1);
    markNotificationAsRead.mockRestore();
  });

  it('Verifies that markNotificationAsRead called with correct ID', () => {
    // Mock markNotificationAsRead function
    const markNotificationAsRead = jest.fn();
    const wrapper = mount(
      <Notifications
        displayDrawer
        listNotifications={listNotifications}
        markNotificationAsRead={markNotificationAsRead}
      />,
    );
    wrapper.find('li').get(0).props.onClick();
    expect(markNotificationAsRead).toHaveBeenCalledWith(1);
    wrapper.find('li').last().simulate('click');
    expect(markNotificationAsRead).toHaveBeenCalledWith(2);
  });
});
