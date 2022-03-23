import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = function NotificationItem({ type, html, value }) {
  if (value) return <li data-notification-type={type} dangerouslySetInnerHTML={html}>{value}</li>;
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
};

NotificationItem.defaultProps = {
  type: 'default',
  value: null,
  html: null,
};

export default NotificationItem;
