import { List } from 'immutable';

export function getListObject(array) {
  // Converts array to immutable list
  return List(array);
}

export function addElementToList(list, element) {
  // Appends element to list
  return list.push(element);
}

// console.log(getListObject([1, 2, 3]));
// console.log(addElementToList([1, 2, 3], 4));
