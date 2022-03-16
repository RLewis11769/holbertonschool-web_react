import React from 'react';
import PropTypes from 'prop-types';
// import NotificationItemShape from './NotificationItemShape';

export default function NotificationItem({ type, html, value }) {
  if (value) return <li data-notification-type={type}>{value}</li>;
  return <li data-notification-type={type} dangerouslySetInnerHTML={html} />;
}

NotificationItem.propTypes = {
  type: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  value: PropTypes.string,
};

NotificationItem.defaultProps = {
  type: 'default',
  html: null,
  value: null,
};
