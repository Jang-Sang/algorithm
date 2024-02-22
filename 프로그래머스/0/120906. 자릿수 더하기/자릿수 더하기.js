// function solution(n) {
//     var answer = 0;
//     return answer;
// }

// 숫자를 문자열로 바꾸고 자릿수를 나누고 reduce로 합치기
const solution = (n) => {
	return String(n).split('').reduce((acc, cur) => acc + cur * 1, 0);
}