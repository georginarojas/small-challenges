/*
IsLucky
Ticket numbers usually consist of an even number of digits. 
A ticket number is considered lucky if the sum of the first 
half of the digits is equal to the sum of the second half.

Given a ticket number n, determine if it's lucky or not.
*/

function solution(n) {
  const digits = n.toString().length;
  if (digits % 2 != 0) {
    console.log("is odd");
    return false;
  }
  const firstHalf = n.toString().slice(0, digits / 2);
  const lastHalf = n.toString().slice(digits / 2, digits);

  function addHalf(half) {
      const add = half
      .split("")
      .map(Number)
      .reduce((prev, curr) => {
        return prev + curr;
      }, 0);
      return add;
  }

  const addFirstHalf = addHalf(firstHalf);
  const addLastHalf = addHalf(lastHalf);
  console.log("is even", addFirstHalf, addLastHalf);

  if(addFirstHalf === addLastHalf) {
      return true
  } else {
      return false
  }

}

solution(239017);
