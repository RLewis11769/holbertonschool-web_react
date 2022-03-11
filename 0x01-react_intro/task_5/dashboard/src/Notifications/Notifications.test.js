import React from 'react';
import Notifications from './Notifications';
import { shallow } from 'enzyme';
import { assert } from 'chai';

describe('Notifications component', () => {
  // Tests for Notifications component in Notifications.js

  it('renders Notifications component without crashing', () => {
    shallow(<Notifications />);
  });

  it('Notifications includes 3 list items', () => {
    const wrapper = shallow(<Notifications />);
    const notifWrapper = wrapper.find('li');
    assert.equal(notifWrapper.length, 3);
  });

  it('Notifications renders correct text list p tag', () => {
    const wrapper = shallow(<Notifications />);
    const notifWrapper = wrapper.find('p');
    expect(notifWrapper.text()).toEqual('Here is the list of notifications');
  });

});
