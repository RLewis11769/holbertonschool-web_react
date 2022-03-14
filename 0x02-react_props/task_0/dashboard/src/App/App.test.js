import React from 'react';
import App from './App';
import { shallow } from "enzyme";
// import { assert } from 'chai';

describe('App component', () => {
  // Tests for App component in App.js

  it('Verifies that App component renders without crashing', () => {
    shallow(<App />);
  });
});
