// function solution(num_list, n) {
//     var answer = [];
//     return answer;
// }

const solution = (num_list, n) => {
    return num_list.filter((_, i) => i%n === 0)
}