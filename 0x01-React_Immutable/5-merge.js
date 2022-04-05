import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  // Concat is normal JS immutable function
  return List(page1).concat(List(page2));
}

export function mergeElements(page1, page2) {
  // Merge is Immutable.js function
  // If two values are the same, second one will be used
  return Map(page1).merge(Map(page2));
}

// Directions say to use List and Map - not sure why (not necessary)
// Not sure results expected - directions say borth return List
