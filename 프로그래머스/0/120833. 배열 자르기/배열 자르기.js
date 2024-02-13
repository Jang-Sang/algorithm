// function solution(numbers, num1, num2) {
//     var answer = [];
//     return answer;
// }


const solution = (numbers, num1, num2) => {
    let result = numbers.slice(num1, num2+1);
    return result;
}