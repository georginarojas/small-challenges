/*
  Is IPv4 Address
*/
function solution(inputString) {
  let isIPvAddress = true;
  const values = inputString.split(".");

  if (values.length !== 4) {
    return (isIPvAddress = false);
  }

  for (let i = 0; i < values.length; i++) {
    const isNumber = /^\d+$/.test(values[i]);
    const hasMoreThanOneDigitAndBeginWithZero = /^0\d+$/.test(values[i]);
    if (
      !isNumber ||
      values[i] < 0 ||
      values[i] > 255 ||
      hasMoreThanOneDigitAndBeginWithZero
    ) {
      return (isIPvAddress = false);
    }
  }

  return isIPvAddress;
}

solution("64.233.161.000");
