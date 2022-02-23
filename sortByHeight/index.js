/*
    SORT-BY-HEIGHT
    Some people are standing in a row in a park. 
    There are trees between them which cannot be moved. 
    Your task is to rearrange the people by their heights in 
    a non-descending order without moving the trees. 
    People can be very tall!
*/
function solution(a) {
  const noTrees = [];
  const result = [];

  a.forEach((el) => {
    if (el !== -1) {
      noTrees.push(el);
    }
  });


  noTrees.sort((a, b) => a - b);

  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] === -1) {
      result[i] = a[i];
    } else {
      result[i] = noTrees[count];
      count++;
    }
  }

  return result;
}

solution([-1, 150, 190, 170, -1, -1, 160, 180]);
