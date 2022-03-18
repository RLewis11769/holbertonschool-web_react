import React from 'react';
import { shallow } from 'enzyme';
import NotificationItem from './Notifications';

describe('NotificationItem component', () => {
  // Tests for NotificationItem component in NotificationItem.js

  it('Verifies that renders NotificationItem component without crashing', () => {
    shallow(<NotificationItem />);
  });

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
});
