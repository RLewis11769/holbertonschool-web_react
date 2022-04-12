import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';

export default function courseReducer(action, state = []) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return action.data.map((course) => ({
        ...course,
        isSelected: false,
      }));
    case SELECT_COURSE:
      // Return state with updated course at given index
      return state.map((course) => {
        // Change state at index
        if (course.id === action.index) {
          return {
            ...course,
            isSelected: true,
          };
        }
        // Return updated course at given index (back to state above)
        return course;
      });
    case UNSELECT_COURSE:
      // Return state with updated course at given index
      return state.map((course) => {
        // Change state at index
        if (course.id === action.index) {
          return {
            ...course,
            isSelected: false,
          };
        }
        // Return updated course at given index (back to state above)
        return course;
      });
    default:
      return state;
  }
}
