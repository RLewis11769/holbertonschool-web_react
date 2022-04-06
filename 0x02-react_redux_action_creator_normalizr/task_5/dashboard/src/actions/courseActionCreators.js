import { SELECT_COURSE, UNSELECT_COURSE } from './courseActionTypes';

// Define creator functions that return actions based on action types
export function selectCourse(index) {
  return {
    type: SELECT_COURSE,
    index,
  };
}

export function unSelectCourse(index) {
  return {
    type: UNSELECT_COURSE,
    index,
  };
}
