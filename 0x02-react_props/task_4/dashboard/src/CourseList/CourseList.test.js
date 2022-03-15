import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";

describe("CourseList component", () => {
  // Tests for CourseList component

  it("Verifies that CourseList component renders without crashing", () => {
    shallow(<CourseList />);
  });

  it("Verifies that 5 CourseListRows rendered", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("CourseListRow").length).toBe(5);
  });
});
