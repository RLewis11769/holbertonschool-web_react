import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';

const user = {
  name: 'Shadow',
  email: 'email@email.com',
};

describe('Header component', () => {
  // Tests for Header component

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Verifies that Header component renders without crashing', () => {
    shallow(<Header />);
  });

  it('Verifies that img tag rendered', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('Verifies that h1 tag rendered', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toEqual(1);
  });

  // Logged in vs not logged in
  it('Verifies that #logoutSection section does not exist when not logged in', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('#logoutSection').length).toEqual(0);
  });

  it('Verifies that #logoutSection section exists with correct rendering when logged in', () => {
    const wrapper = shallow(<Header isUserLoggedIn user={user} />);
    expect(wrapper.find('#logoutSection').length).toEqual(1);
    expect(wrapper.find('#logoutSection').text()).toEqual('Welcome email@email.com (logout)');
  });

  it('Verifies that logs out when button is clicked', () => {
    const logout = jest.fn();
    const wrapper = shallow(<Header isUserLoggedIn user={user} logout={logout} />);
    wrapper.find('#logoutSection').find('button').simulate('click');
    expect(logout).toHaveBeenCalled();
  });
});
