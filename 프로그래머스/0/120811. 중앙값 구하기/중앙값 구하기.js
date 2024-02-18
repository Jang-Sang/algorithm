// function solution(array) {
//     var answer = 0;
//     return answer;
// }

// 오름차순 정렬 -> 중앙값 찾기 -> 배열 길이 나누기 2
const solution = (array) => {
    let answer = array.sort((a,b) => a-b)
    let middle = Math.floor(answer.length / 2);
    return answer[middle];
}