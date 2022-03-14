import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
// import { assert } from 'chai';

describe('App component', () => {
  // Tests for App component in App.js

  it('Verifies that App component renders without crashing', () => {
    shallow(<App />);
  });

  test('Notifications component exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  test('Header component exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  test('Login component exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
  });

  test('Footer component exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });
});
