// function solution(numbers, n) {
//     var answer = 0;
//     return answer;
// }

const solution = (numbers, n) => {
    // 삼항연산자로 현재값을 더할 때 n보다 커지는 순간까지 더하기
    return numbers.reduce((acc, cur) => acc > n ? acc : acc+cur, 0)
}