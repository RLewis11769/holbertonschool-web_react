/* eslint-disable object-curly-newline */
import { fetchCourseSuccess, unSelectCourse } from '../actions/courseActionCreators';
import courseReducer from './courseReducer';

const fetchCourses = {
  type: 'FETCH_COURSE_SUCCESS',
  data: [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ],
};

const fetchCoursesReturn = [
  { id: 1, name: 'ES6', isSelected: false, credit: 60 },
  { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
  { id: 3, name: 'React', isSelected: false, credit: 40 },
];

const courseList = [
  { id: 1, name: 'ES6', isSelected: false, credit: 60 },
  { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
  { id: 3, name: 'React', isSelected: false, credit: 40 },
];

describe('uiReducer.js reducer tests', () => {
  it('Verifies that default state returns array', () => {
    const action = {};
    expect(courseReducer(action)).toEqual([]);
  });

  it('Verifies that FETCH_COURSE_SUCCESS returns updated array', () => {
    const action = fetchCourseSuccess(fetchCourses.data);
    expect(courseReducer(action)).toEqual(fetchCoursesReturn);
  });

  it('Verifies that SELECT_COURSE returns updated array at given index', () => {
    const action = {
      type: 'SELECT_COURSE',
      index: 1,
    };
    expect(courseReducer(action, courseList)).toEqual([
      { id: 1, name: 'ES6', isSelected: true, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ]);
  });

  it('Verifies that UNSELECT_COURSE returns updated array at given index', () => {
    const action = unSelectCourse(2);
    expect(courseReducer(action, courseList)).toEqual([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 },
    ]);
  });
});
