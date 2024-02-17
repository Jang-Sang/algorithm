// function solution(numbers) {
//     var answer = 0;
//     return answer;
// }

const solution = (numbers) => {
    //.sort()로 정렬
    // 자주 나오는 sort 커스터마이징
    // arr.sort((a, b) => a - b) 오름차순
    // arr.sort((a, b) => b-a) 내림차순
    let answer = numbers.sort((a,b) => b-a)
    return answer[0]*answer[1];
}