// Access nested elements of an immutable object
import { Map, getIn } from 'immutable';

export default function accessImmutableObject(object, array) {
  // getIn returns value at provided path starting at provided object
  return getIn(Map(object), array);
}

// // JS way - not Immutable.js way
// export default function accessImmutableObject(object, array) {
//   // Return value of object at defined path
//   // Should return undefined, string, or Map
//   return array.reduce((acc, curr) => acc[curr], object);
// }

// console.log(accessImmutableObject({
//   name: {
//     first: "Guillaume",
//     last: "Salva"
//   }
// }, ['name', 'first']));
