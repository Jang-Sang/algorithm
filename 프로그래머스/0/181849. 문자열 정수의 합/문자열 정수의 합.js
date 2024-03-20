// function solution(num_str) {
//     var answer = 0;
//     return answer;
// }

// 배열 나누기 -> 배열 안에 요소 합치기 -> 결과물 출력
const solution = (num_str) => {
    return [...num_str].reduce((acc, curr) => acc + Number(curr), 0)
}