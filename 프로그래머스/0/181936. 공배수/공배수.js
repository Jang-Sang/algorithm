// function solution(number, n, m) {
//     var answer = 0;
//     return answer;
// }

const solution = (number, n, m) => {
    let result = 0;
    if (number % n === 0 && number % m === 0 ){
        return result = 1;
    } else if (number % n === 0 && number % m !== 0 ){
        return result = 0;
    }
    return result
}