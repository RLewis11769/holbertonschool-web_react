import React from "react";
import PropTypes from "prop-types";
import "./CourseList.css";
import CourseListRow from "./CourseListRow";
import { CourseShape } from "./CourseShape";

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default function CourseList({ listCourses }) {
  console.log(listCourses);
  return (
    <table>
      <thead>
        <CourseListRow isHeader={true} textFirstCell='Available courses' />
        <CourseListRow
          isHeader={true}
          textFirstCell='Course name'
          textSecondCell='Credit'
        />
      </thead>
      <tbody>
        {listCourses.length ? (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        ) : (
          <CourseListRow textFirstCell='No course available yet' />
        )}
      </tbody>
    </table>
  );
}
