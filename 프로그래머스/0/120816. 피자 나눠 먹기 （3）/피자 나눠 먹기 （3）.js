// function solution(slice, n) {
//     var answer = 0;
//     return answer;
// }

const solution = (slice, n) => {
    //Math.ceil 은 소수값이 존재할 때 값을 올리는 역활을 하는 함수
    let result = Math.ceil(n/slice);
    return result;
}