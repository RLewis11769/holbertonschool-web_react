import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from "enzyme";
import { assert } from 'chai';

describe('App component', () => {
  // Tests for App component in App.js

  it('Verifies that App component renders without crashing', () => {
    shallow(<App />);
  });

  test("App-header class exists", () => {
    const wrapper = shallow(<App />);
    const appWrapper = wrapper.find('.App-header');
    assert.equal(appWrapper.length, 1);
  });

  test("App-body class exists", () => {
    const wrapper = shallow(<App />);
    const appWrapper = wrapper.find('.App-body');
    assert.equal(appWrapper.length, 1);
  });

  test("App-footer class exists", () => {
    const wrapper = shallow(<App />);
    assert.equal(wrapper.find('.App-footer').length, 1);
  });
});
