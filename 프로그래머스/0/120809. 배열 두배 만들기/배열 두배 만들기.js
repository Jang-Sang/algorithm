// function solution(numbers) {
//     var answer = [];
//     return answer;
// }

const solution = (numbers) => {
    let answer = [];
    // map메소드로 안에 배열을 두배로 증가
    answer = numbers.map(x=>x*2);
    return answer;
}