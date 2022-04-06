import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Define creator functions that return actions based on action types
export const selectCourse = (index) => ({
  type: SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: UNSELECT_COURSE,
  index,
});
