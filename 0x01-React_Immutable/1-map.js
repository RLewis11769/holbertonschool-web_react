import { Map } from 'immutable';

export default function getImmutableObject(object) {
  // Convert object to immutable map
  return Map(object);
}

// const obj = {
//   fear: true,
//   smell: -1033575916.9145899,
//   wall: false,
//   thing: -914767132
// }

// console.log(getImmutableObject(obj));
