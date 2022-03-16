import PropTypes from "prop-types";

export const CourseShape = PropTypes.shape({
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  credit: PropTypes.number.isRequired,
});
