// function solution(my_string, n) {
//     var answer = '';
//     return answer;
// }

// my_string을 배열로 바꿔 준 다음, reduce 함수를 통해서 다음에 올 요소를 repeat 함수로 n 만큼 반복시켜서 합쳐준다.
const solution = (my_string, n) => {
    return my_string.split('').reduce((acc, cur) => acc + cur.repeat(n), '')
}