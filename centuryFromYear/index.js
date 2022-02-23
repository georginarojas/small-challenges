/*
Given a year, return the century it is in. 
The first century spans from the year 1 up 
to and including the year 100, the second - 
from the year 101 up to and including the year 200, etc.
*/

function solution(year) {
  if (1 <= year <= 2005) {
    const century = year % 100 === 0 ? year / 100 : Math.floor(year / 100) + 1;
    return century;
  }
}

solution(1905);
