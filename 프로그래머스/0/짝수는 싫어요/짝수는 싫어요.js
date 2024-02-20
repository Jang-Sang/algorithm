// function solution(n) {
//     var answer = [];
//     return answer;
// }

// 홀수 구하기, 그 이하를 계속 배열에 넣기
const solution = (n) => {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) {
      answer.push(i);
    }
  }
  return answer;
};
