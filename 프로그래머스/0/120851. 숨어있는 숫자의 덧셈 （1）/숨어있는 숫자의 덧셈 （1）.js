// function solution(my_string) {
//     var answer = 0;
//     return answer;
// }

// 배열 나누기 -> 자연수 분리하기 -> 모두 더하기
const solution = (my_string) => {
    // 변수 초기화
    let answer = 0;
    // isNaN으로 안에 배열이 숫자인지 검사하고 맞으면 더하기 아니면 0을 반환한다.
    my_string.split("").map(e => !isNaN(e)? answer += Number(e) : 0)
    return answer;
}