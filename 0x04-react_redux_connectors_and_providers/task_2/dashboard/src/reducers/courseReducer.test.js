/* eslint-disable object-curly-newline */
import { Map } from 'immutable';
import { fetchCourseSuccess, unSelectCourse, selectCourse } from '../actions/courseActionCreators';
import courseReducer from './courseReducer';
import coursesNormalizer from '../schema/courses';

const fetchCourses = {
  type: 'FETCH_COURSE_SUCCESS',
  data: [
    { id: 1, name: 'ES6', credit: 60 },
    { id: 2, name: 'Webpack', credit: 20 },
    { id: 3, name: 'React', credit: 40 },
  ],
};

// Normalize data when define
const normalizedSelected = coursesNormalizer([
  { id: 1, name: 'ES6', isSelected: false, credit: 60 },
  { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
  { id: 3, name: 'React', isSelected: false, credit: 40 },
]);

// Define initial state
const courseListUnselected = [
  { id: 1, name: 'ES6', isSelected: false, credit: 60 },
  { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
  { id: 3, name: 'React', isSelected: false, credit: 40 },
];

// Normalize data
const normalizedUnselected = coursesNormalizer(courseListUnselected);

describe('courseReducer.js reducer tests', () => {
  it('Verifies that default state returns array', () => {
    const action = {};
    expect(courseReducer(action)).toEqual(Map([]));
  });

  it('Verifies that FETCH_COURSE_SUCCESS returns updated array', () => {
    const action = fetchCourseSuccess(fetchCourses.data);
    // fetchCourseSuccess doesn't return normalized data so just need initial state
    expect(courseReducer(action)).toEqual(normalizedUnselected);
  });

  it('Verifies that SELECT_COURSE type returns updated array at given index', () => {
    const action = {
      type: 'SELECT_COURSE',
      index: 2,
    };
    // Pass normalized course list to reducer and convert return back to array from Map
    // expect return to be updated array at given index
    expect(courseReducer(action, normalizedUnselected).toJS()).toEqual(normalizedSelected);
  });

  it('Verifies that selectCourse returns updated array at given index', () => {
    const action = selectCourse(2);
    // Pass normalized course list to reducer and convert return back to array from Map
    // expect return to be updated array at given index
    expect(courseReducer(action, normalizedUnselected).toJS()).toEqual(normalizedSelected);
  });

  it('Verifies that UNSELECT_COURSE type returns updated array at given index', () => {
    const action = {
      type: 'UNSELECT_COURSE',
      index: 2,
    };
    // Pass normalized course list to reducer and convert return back to array from Map
    // expect return to be updated array at given index
    expect(courseReducer(action, normalizedSelected).toJS()).toEqual(normalizedUnselected);
  });

  it('Verifies that unSelectCourse returns updated array at given index', () => {
    const action = unSelectCourse(2);
    // Pass normalized course list to reducer and convert return back to array from Map
    // expect return to be updated array at given index
    expect(courseReducer(action, normalizedSelected).toJS()).toEqual(normalizedUnselected);
  });
});
