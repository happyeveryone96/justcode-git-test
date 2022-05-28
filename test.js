const findEvenNum = () => {
  const answer = [];
  for (let i = 1; i < 51; i++) {
    if (i % 2 === 0) {
      answer.push(i);
    }
  }
  return answer;
};
