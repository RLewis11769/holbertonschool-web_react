import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('courseActionCreators tests', () => {
  // Tests for actions/courseActionCreators and actions/courseActionTypes

  it('Verifies that selectCourse function returns correct action', () => {
    expect(selectCourse(1)).toEqual({
      type: 'SELECT_COURSE',
      index: 1,
    });
  });

  it('Verifies that unSelectCourse function returns correct action', () => {
    expect(unSelectCourse(1)).toEqual({
      type: 'UNSELECT_COURSE',
      index: 1,
    });
  });
});
