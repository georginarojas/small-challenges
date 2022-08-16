function solution(inputString) {
  const count = {};
  let countOddValues = 0;

  for (const el of inputString) {
    count[el] = count[el] ? count[el] + 1 : 1;
  }

  const countList = Object.values(count);
  countList.forEach((value) => {
    if (value % 2 !== 0) {
      countOddValues++;
    }
  });

  if (countOddValues > 1) {
    return false;
  }
  return true;
}

const inputString = "aabb";
solution(inputString);
