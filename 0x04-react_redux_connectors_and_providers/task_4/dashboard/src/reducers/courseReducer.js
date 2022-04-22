import { Map, merge, setIn } from 'immutable';
import { SELECT_COURSE, UNSELECT_COURSE, FETCH_COURSE_SUCCESS } from '../actions/courseActionTypes';
import coursesNormalizer from '../schema/courses';

export default function courseReducer(action, state = Map([])) {
  switch (action.type) {
    case FETCH_COURSE_SUCCESS:
      return coursesNormalizer(action.data.map((course) => (
        merge(course, { isSelected: false })
      )));
    case SELECT_COURSE:
      // Convert to Map to allow for nested updates, then update isSelected to true
      // where id is equal to action.index (notice id is int so need to convert)
      return setIn(Map(state), [String(action.index), 'isSelected'], true);
    case UNSELECT_COURSE:
      // update isSelected to false at given id (where String(id) is equal to action.index)
      return Map(state).setIn([String(action.index), 'isSelected'], false);
    default:
      return state;
  }
}
