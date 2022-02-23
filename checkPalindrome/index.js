/*
    CHECK-PALINDROME
    Given the string, check if it is a palindrome.
*/
function solution(inputString) {
    if(1<=inputString.length<=100000){
        const result = inputString === inputString.split('').reverse().join('');
        return result;
    }
}

solution("aabaa")