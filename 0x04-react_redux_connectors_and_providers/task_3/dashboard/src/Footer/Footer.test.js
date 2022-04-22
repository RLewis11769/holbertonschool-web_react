import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const testUser = {
  name: 'name',
  email: 'email@email.com',
};

describe('Footer component', () => {
  // Tests for Footer component

  it('Verifies that Footer component renders without crashing', () => {
    shallow(<Footer />);
  });

  it('Verifies that contains/matches Copyright (regex)', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('#footer').text()).toMatch(/Copyright/);
  });

  it('Verifies that no links displayed by default', () => {
    const wrapper = shallow(<Footer isUserLoggedIn={false} />);
    expect(wrapper.find('a').length).toEqual(0);
  });

  it('Verifies that no links displayed when isUserLoggedIn changes', () => {
    const wrapper = shallow(<Footer />);
    wrapper.setProps({
      user: null,
      isUserLoggedIn: false,
    });
    expect(wrapper.find('a').length).toEqual(0);
  });

  it('Verifies that links displayed when isUserLoggedIn props passed in', () => {
    const wrapper = shallow(<Footer user={testUser} isUserLoggedIn />);
    expect(wrapper.find('a').length).toEqual(1);
  });
});
