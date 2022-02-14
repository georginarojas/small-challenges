/*
  Common Character Count
  Given two strings, find the number of common characters between them.

  Example
    For s1 = "aabcc" and s2 = "adcaa", the output should be
    solution(s1, s2) = 3.

  Strings have 3 common characters - 2 "a"s and 1 "c".
*/

function commonCharacterCount(s1, s2) {
  let count = 0;
  const arrAux = s2.split("");
  for (str of s1) {
    let idx = arrAux.findIndex((value) => value === str);
    if (idx >= 0) {
      count++;
      arrAux.splice(idx, 1);
    }
  }
  return count;
}

commonCharacterCount( "zzzz", "zzzzzzz");
