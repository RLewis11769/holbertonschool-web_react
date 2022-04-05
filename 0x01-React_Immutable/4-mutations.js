import { Map } from 'immutable';

export const map = Map({
  1: 'Liam',
  2: 'Noah',
  3: 'Elijah',
  4: 'Oliver',
  5: 'Jacob',
  6: 'Lucas',
});

// Convert index 2 to 'Ethan' and index 3 to 'Mason'
export const map2 = map.withMutations((idx) => {
  idx.set(2, 'Benjamin');
  idx.set(4, 'Oliver');
});
