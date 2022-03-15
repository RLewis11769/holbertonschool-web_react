import React from "react";
import PropTypes from "prop-types";

NotificationItem.PropTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: "default",
};

export default function NotificationItem({ type, html, value }) {
  if (value) {
    return <li data-priority={type}>{value}</li>;
  } else {
    return <li data-priority={type} dangerouslySetInnerHTML={html} />;
  }
}
