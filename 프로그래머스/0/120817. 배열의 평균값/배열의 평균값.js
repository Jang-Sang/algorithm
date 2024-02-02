// function solution(numbers) {
//     var answer = 0;
//     return answer;
// }

const solution = (numbers) => {
	let sum = 0;
    //numbers의 길이까지 증가
    for(let i=0; i<numbers.length; i++){
        // numbers의 요소 전부 더하기
    	sum += numbers[i]
    };
    // 배열안에 요소 전부 더하기 / 안에 갯수
    return sum/numbers.length
  }