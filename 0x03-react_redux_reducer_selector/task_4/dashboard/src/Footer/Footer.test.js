import React from 'react';
import { shallow, mount } from 'enzyme';
import { AppContext } from '../App/AppContext';
import Footer from './Footer';

describe('Footer component', () => {
  // Tests for Footer component

  it('Verifies that Footer component renders without crashing', () => {
    shallow(<Footer />);
  });

  it('Verifies that contains/matches Copyright (regex)', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('#footer').text()).toMatch(/Copyright/);
  });

  // Context tests
  it('Verifies that link not displayed when logged out by default', () => {
    const wrapper = mount(<Footer />);
    expect(wrapper.find('#footer a')).toHaveLength(0);
  });

  it('Verifies that link not displayed when logged out', () => {
    const wrapper = mount(
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <AppContext.Provider value={{ user: { isLoggedIn: false } }}>
        <Footer />
      </AppContext.Provider>,
    );
    expect(wrapper.find('#footer a')).toHaveLength(0);
  });

  it('Verifes that link displayed when logged in', () => {
    const wrapper = mount(
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      <AppContext.Provider value={{ user: { isLoggedIn: true } }}>
        <Footer />
      </AppContext.Provider>,
    );
    expect(wrapper.find('#footer a')).toHaveLength(1);
    expect(wrapper.find('#footer a').text()).toEqual('Contact us');
  });
});
