/*
ADD-BORDER
Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Example

For

picture = ["abc",
           "ded"]
the output should be

solution(picture) = ["*****",
                      "*abc*",
                      "*ded*",
                      "*****"]
*/
function solution(picture) {
  const text = "*";
  let maxWordLength = 0;

  picture.forEach((element, index) => {
    const temp = maxWordLength;
    if (temp < element.length) {
      maxWordLength = element.length;
    }
  });
  picture.splice(0, 0, text.repeat(maxWordLength + 2));
  picture.push(text.repeat(maxWordLength + 2));

  picture.forEach((el, idx) => {
    const max = Math.round((maxWordLength + 2 - el.length) / 2);
    const min = maxWordLength + 2 - el.length - max;
    const newEl = text.repeat(max) + el + text.repeat(min);
    picture.splice(idx, 1, newEl);
  });

  return picture;
}

const picture = ["abc", "ded"];
solution(picture);
