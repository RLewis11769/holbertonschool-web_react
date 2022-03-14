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
    shallow(<NotificationItem type='default' value='test' />);
  });

  it('Renders NotificationItem with props passed in', () => {
    shallow(<NotificationItem type='urgent' html={{ __html: 'test' }} />);
  });
});
