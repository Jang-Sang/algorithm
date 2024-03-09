// function solution(num, n) {
//     var answer = 0;
//     return answer;
// }

const solution = (num, n) => {
    let answer = 0;
        if (num % n === 0) {
        answer = 1
    } else {
        answer = 0
    }
    return answer;
}