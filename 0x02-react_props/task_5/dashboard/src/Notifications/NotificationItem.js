import React from "react";
import PropTypes from "prop-types";
import { NotificationItemShape } from "./NotificationItemShape";

NotificationItem.propTypes = {
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

NotificationItem.defaultProps = {
  type: "default",
};

export default function NotificationItem({ type, html, value }) {
  console.log(html);
  if (value) {
    return <li data-priority={type}>{value}</li>;
  } else {
    return <li data-priority={type} dangerouslySetInnerHTML={html} />;
  }
}
