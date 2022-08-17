/*
Array maximal adjacent difference
Given an array of integers, find the maximal absolute difference between any two of its adjacent elements.
*/

function solution(inputArray) {
  let maxDiff = 0;

  for (let i = 0; i < inputArray.length; i++) {
    const diff = Math.abs(inputArray[i] - inputArray[i + 1]);
    if (diff > maxDiff) {
      maxDiff = diff;
    }
  }
  return maxDiff;
}

const inputArray = [2, 4, 1, 0]; // Result 3
solution(inputArray);
