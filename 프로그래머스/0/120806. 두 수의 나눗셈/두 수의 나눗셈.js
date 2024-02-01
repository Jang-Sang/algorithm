// function solution(num1, num2) {
//     var answer = 0;
//     return answer;
// }

const solution = (num1, num2) => {
    // math.floor로 소수점 아래 버리기
    let answer = Math.floor((num1 / num2) * 1000);
    return answer;
}