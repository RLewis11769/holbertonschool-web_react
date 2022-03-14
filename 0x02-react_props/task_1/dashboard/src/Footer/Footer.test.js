import React from 'react';
import Footer from './Footer';
import { shallow } from "enzyme";
import { assert } from 'chai';

describe('Footer component', () => {
  // Tests for Footer component

  it('Verifies that Footer component renders without crashing', () => {
    shallow(<Footer />);
  });

  it('Verifies that contains/matches Copyright (regex)', () => {
    const wrapper = shallow(<Footer />);
    assert.match(wrapper.text(), /Copyright/);
  });
});

