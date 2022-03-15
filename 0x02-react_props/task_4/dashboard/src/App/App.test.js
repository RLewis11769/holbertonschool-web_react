import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("App component", () => {
  // Tests for App component in App.js

  it("Verifies that App component renders without crashing", () => {
    shallow(<App />);
  });

  test("Notifications component exists", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Notifications")).toHaveLength(1);
  });

  test("Header component exists", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Header")).toHaveLength(1);
  });

  test("Login component exists by default (when isLoggedIn is false)", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Login")).toHaveLength(1);
    expect(wrapper.find("CourseList")).toHaveLength(0);
  });

  test("CourseList component exists when isLoggedIn is true", () => {
    const wrapper = shallow(<App isLoggedIn={true} />);
    expect(wrapper.find("CourseList")).toHaveLength(1);
    expect(wrapper.find("Login")).toHaveLength(0);
  });

  test("Footer component exists", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Footer")).toHaveLength(1);
  });
});
