/*
  almost-increasing-sequence;
  Description:
    Given a sequence of integers as an array, determine whether it is possible 
    to obtain a strictly increasing sequence by removing no more than one element 
    from the array.

    For sequence = [1, 3, 2, 1], the output should be
    solution(sequence) = false.

    There is no one element in this array that can be removed in order to get a 
    strictly increasing sequence.

    For sequence = [1, 3, 2], the output should be
    solution(sequence) = true.

    You can remove 3 from the array to get the strictly increasing sequence [1, 2].
     Alternately, you can remove 2 to get the strictly increasing sequence [1, 3]
*/

function almostIncreasingSequence(sequence) {
  // verify if increasing,  if not return the index.
  const getIdxPairs = (data) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i] >= data[i + 1]) {
        return i;
      }
    }
    return -1;
  };

  index = getIdxPairs(sequence);
  const arrAux = [];

  if (index === -1) {
    return true;
  }
  if (getIdxPairs(arrAux.concat(sequence.slice(index - 1, index), sequence.slice(index + 1))) === -1) {
    return true; // delete the previous element
  }
  if (getIdxPairs(arrAux.concat(sequence.slice(index, index + 1), sequence.slice(index + 2))) === -1) {
    return true; // delete the next element
  }
  console.log(false);
  return false; // Deleting either does not make increasing
}

almostIncreasingSequence([1, 3, 2, 1]);
