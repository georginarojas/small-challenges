/*
    Challenge: Array change
*/
function arrayChange(inputArray) {
  let count = 0;

  for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i] >= inputArray[i + 1]) {
      const diff = inputArray[i] + 1 - inputArray[i + 1];
      inputArray[i + 1] = inputArray[i] + 1;
      count += diff;
    }
  }
  return count;
}

const inputArray = [-1000, 0, -2, 0];
// const inputArray = [2, 1, 10, 1];
arrayChange(inputArray);
