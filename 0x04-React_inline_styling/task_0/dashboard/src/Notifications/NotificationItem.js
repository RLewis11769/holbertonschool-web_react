import React from 'react';
import PropTypes from 'prop-types';

const NotificationItem = function NotificationItem({
  type, html, value, markAsRead,
}) {
  // ESLint attempts - not able to split lines properly
  if (value) {
    return (
      <li
        data-notification-type={type}
        onClick={markAsRead}
      >
        {value}
      </li>
    );
  }
  return (
    <li
      data-notification-type={type}
      dangerouslySetInnerHTML={html}
      onClick={markAsRead}
    />
  );
};

NotificationItem.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func.isRequired,
};

NotificationItem.defaultProps = {
  type: 'default',
  value: null,
  html: null,
  markAsRead: () => {},
};

export default NotificationItem;
