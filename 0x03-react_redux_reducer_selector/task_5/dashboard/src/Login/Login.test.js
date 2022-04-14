import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Login from './Login';

describe('Login component', () => {
  // Tests for Login component

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Verifies that Login component renders without crashing', () => {
    shallow(<Login />);
  });

  it('Verifies that 3 input tags rendered', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').length).toEqual(3);
  });

  it('Verifies that 2 label tags rendered', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('label').length).toEqual(2);
  });

  it('Verifies that submit button disabled by default', () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find('input').at(2).prop('disabled')).toEqual(true);
  });

  it('Verifies that submit button enabled when email and password state are changed', () => {
    const wrapper = shallow(<Login />);
    wrapper.find('input').at(0).simulate('change', { target: { value: 'me@email.com' } });
    wrapper.find('input').at(1).simulate('change', { target: { value: 'password' } });
    expect(wrapper.find('input').at(2).prop('disabled')).toEqual(false);
  });
});
