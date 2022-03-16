import PropTypes from "prop-types";

export const NotificationItemShape = PropTypes.shape({
  id: PropTypes.number.isrequired,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isrequired,
  value: PropTypes.string,
});
