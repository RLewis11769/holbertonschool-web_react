import React from 'react';
import NotificationItem from './Notifications';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
// import { expect } from 'chai';

describe('NotificationItem component', () => {
  // Tests for NotificationItem component in NotificationItem.js

  it('renders NotificationItem component without crashing', () => {
    shallow(<NotificationItem />);
  });

  it('Renders NotificationItem with props passed in', () => {
    const wrapper = shallow(<NotificationItem type='default' value='test' />);
    expect(wrapper.props().dataPriority === 'default');
    expect(wrapper.props().dataValue === 'test');
  });

  it('Renders NotificationItem with props passed in', () => {
    const wrapper = shallow(<NotificationItem type='urgent' html={{ __html: '<u>test</u>' }} />);
    expect(wrapper.props().dataPriority === 'urgent');
    expect(wrapper.props().dataValue === 'test');
    expect(wrapper.props().html === '<u>test</u>');
  });
});
