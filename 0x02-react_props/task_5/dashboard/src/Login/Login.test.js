import React from "react";
import Login from "./Login";
import { shallow } from "enzyme";

describe("Login component", () => {
  // Tests for Login component

  it("Verifies that Login component renders without crashing", () => {
    shallow(<Login />);
  });

  it("Verifies that 2 input tags rendered", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("input").length).toEqual(2);
  });

  it("Verifies that 2 label tags rendered", () => {
    const wrapper = shallow(<Login />);
    expect(wrapper.find("label").length).toEqual(2);
  });
});
