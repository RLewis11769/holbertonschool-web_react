import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from './courseActionTypes';

// Define creator functions that return actions based on action types
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});

export const fetchCourseSuccess = (data) => ({
  type: FETCH_COURSE_SUCCESS,
  data,
});
