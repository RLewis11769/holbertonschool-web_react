import React, { useState } from 'react';
import { StyleSheet, css } from 'aphrodite';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  center: {
    textAlign: 'center',
  },
  rowChecked: {
    backgroundColor: '#e6e4e4',
  },
});

const CourseListRow = function CourseListRow({
  isHeader,
  textFirstCell,
  textSecondCell,
}) {
  const [isChecked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!isChecked);
  };

  return (
    <tr style={{ backgroundColor: isHeader ? '#deb5b545' : '#f5f5f5ab' }} className={isChecked ? css(styles.rowChecked) : ''}>
      {isHeader && textSecondCell === null && (
        <th colSpan={3}>{textFirstCell}</th>
      )}
      {isHeader && textSecondCell && (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
          <th>Checked</th>
        </>
      )}
      {!isHeader && (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
          <td className={css(styles.center)}>
            <input type="checkbox" checked={isChecked} onChange={handleChecked} />
          </td>
        </>
      )}
    </tr>
  );
};

// Define types and default values of args/props
CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

export default CourseListRow;
