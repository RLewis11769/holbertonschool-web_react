import React from 'react';
import Header from './Header';
import { shallow } from "enzyme";
import { assert } from 'chai';

describe('Header component', () => {
  // Tests for Header component

  it('Verifies that Header component renders without crashing', () => {
    shallow(<Header />);
  });

  it('Verifies that img tag rendered', () => {
    const wrapper = shallow(<Header />);
    assert.equal(wrapper.find('img').length, 1);
  });

  it('Verifies that h1 tag rendered', () => {
    const wrapper = shallow(<Header />);
    assert.equal(wrapper.find('h1').length, 1);
  });
});
