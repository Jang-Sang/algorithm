// function solution(n) {
//     var answer = 0;
//     return answer;
// 


const solution = (n) => {
   const sqrt = Math.sqrt(n);
    if (Number.isInteger(sqrt)) {
        return 1; // n이 제곱수라면 1 반환
    } else {
        return 2; // n이 제곱수가 아니라면 2 반환
    }
}