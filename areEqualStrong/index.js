function solution(yourLeft, yourRight, friendsLeft, friendsRight) {
  const strongest = Math.max(yourLeft, yourRight) == Math.max(friendsLeft, friendsRight);
  const weakest = Math.min(yourLeft, yourRight) == Math.min(friendsLeft, friendsRight);

  return strongest && weakest;
}

solution(10, 15, 5, 20)
