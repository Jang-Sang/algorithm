// function solution(n) {
//     var answer = 0;
//     return answer;
// }

const solution = (n) => {
    // 최소 한조각이니 반올림으로 올려버린다.
    return Math.ceil(n / 7)
}