/*
    Find element occurrence in array
*/
function occurrence(list) {
  const count = {};

  for (const el of list) {
    count[el] = count[el] ? count[el] + 1 : 1;
  }
  return count;
}

const list = [1, 1, 2, 3, 1, 3];
occurrence(list);
