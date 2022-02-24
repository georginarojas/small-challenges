/*
REVERSE-IN-PARENTHESES
Write a function that reverses characters in (possibly nested) parentheses in the input string.
Input strings will always be well-formed with matching ()s.
Example:
  For inputString = "foo(bar(baz))blim", the output should be
  solution(inputString) = "foobazrabblim"
*/

function solution(inputString) {
  if (inputString.includes("(")) {
    const result = solution(reverseOnce(inputString));
    return result;
  } else {
    return inputString;
  }
}

function reverseOnce(input) {
  var regExp = /\(([^()]*)\)/i;
  var matches = regExp.exec(input);
  matches = matches[1].split("").reverse().join("");
  return input.replace(regExp, matches);
}

// solution("foo(bar)baz");
solution("foo(bar)baz(blim)");
// solution("foo(bar(baz))blim");
