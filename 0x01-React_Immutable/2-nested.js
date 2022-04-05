// Access nested elements of an immutable object

export default function accessImmutableObject(object, array) {
  // Return value of object at defined path
  // Should return undefined, string, or Map
  return array.reduce((acc, curr) => acc[curr], object);
}

// console.log(accessImmutableObject({
//   name: {
//     first: "Guillaume",
//     last: "Salva"
//   }
// }, ['name', 'first']));
