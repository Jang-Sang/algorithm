// function solution(n, k) {
//     var answer = 0;
//     return answer;
// }

const solution = (n, k) => {
    let a = 12000 * n;
    let b = 2000 * k;
    let c = Math.floor(n/10)*2000;
    let answer = a + b - c ;
    return answer;
}