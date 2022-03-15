import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";

describe("Notifications component", () => {
  // Tests for Notifications component in Notifications.js

  it("Verifies that renders Notifications component without crashing", () => {
    shallow(<Notifications />);
  });

  it("Verifies that Notifications contains .menuItem div by default (displayDrawer false)", () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find(".menuItem").length).toBe(1);
    expect(wrapper.find(".Notification").length).toBe(0);
  });

  it("Verifies that Notifications contains both divs when displayDrawer true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find(".menuItem").length).toBe(1);
    expect(wrapper.find(".Notifications").length).toBe(1);
  });

  it("Verifies that Notifications includes 3 NotificationItem components when displayDrawer true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("NotificationItem").length).toBe(3);
  });

  it("Verifies that Notifications renders first NotificationItem element correctly when displayDrawer true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("NotificationItem").first().props().type).toEqual(
      "default"
    );
    expect(wrapper.find("NotificationItem").first().props().value).toEqual(
      "New course available"
    );
  });

  it("Verifies that Notifications renders correct text list p tag when displayDrawer true", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find("p").text()).toEqual(
      "Here is the list of notifications"
    );
  });
});
