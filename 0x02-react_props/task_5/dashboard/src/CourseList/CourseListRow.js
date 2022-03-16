import React from "react";
import PropTypes from "prop-types";

// Define types and default values of args/props
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {
  return (
    <tr>
      {isHeader && textSecondCell === null && (
        <th colSpan={2}>{textFirstCell}</th>
      )}
      {isHeader && textSecondCell && (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      )}
      {!isHeader && (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
}
