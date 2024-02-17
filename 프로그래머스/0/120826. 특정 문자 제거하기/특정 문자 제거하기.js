// function solution(my_string, letter) {
//     var answer = '';
//     return answer;
// }

// 필요한것 - 배열 나누기 -> 특정 요소 제거 -> 다시 합치기
const solution = (my_string, letter) => {
    // 정규 표현식을 사용하여 문자열에서 모든 'letter'를 제거
    // 'g' 플래그는 문자열 전체에서 모든 일치 항목을 찾습니다.
    return my_string.replace(new RegExp(letter, 'g'), '');
}
