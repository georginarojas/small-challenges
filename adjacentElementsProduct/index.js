/*
ADJACENT-ELEMENTS-PRODUCT
Given an array of integers, find the pair of adjacent elements that has the largest product 
and return that product.

Example

For inputArray = [3, 6, -2, -5, 7, 3], the output should be
solution(inputArray) = 21.

7 and 3 produce the largest product.
*/
function solution(inputArray) {
  if (2 <= inputArray.length <= 10) {
    let max = -1001;
    for (let i = 0; i < inputArray.length; i++) {
      if (-1000 <= inputArray[i] <= 1000) {
        const temp = inputArray[i] * inputArray[i + 1];
        console.log(temp);
        if (temp > max) max = temp;
      }
    }
    return max;
  }
}

solution([-23, 4, -3, 8, -12]);
