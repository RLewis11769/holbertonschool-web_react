import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('courseActionCreators action tests', () => {
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

describe('courseActionCreators dispatch tests', () => {
  it('Verifies that selectCourse bound', () => {
    const dispatch = jest.fn();
    dispatch(selectCourse(1));
    expect(dispatch).toHaveBeenCalledWith({
      type: 'SELECT_COURSE',
      index: 1,
    });
  });

  it('Verifies that unSelectCourse bound', () => {
    const dispatch = jest.fn();
    dispatch(unSelectCourse(1));
    expect(dispatch).toHaveBeenCalledWith({
      type: 'UNSELECT_COURSE',
      index: 1,
    });
  });
});
