import { Map, is } from 'immutable';

export default function areMapsEqual(map1, map2) {
  // Compare two maps - literally just value equality check
  return is(map1, map2);
}

// const map1 = Map({
//   firstName: 'Guillaume',
//   lastName: 'Salva',
// });

// const map2 = Map({
//   firstName: 'Guillaume',
//   lastName: 'Salva',
// });

// console.log(areMapsEqual(map1, map2));
