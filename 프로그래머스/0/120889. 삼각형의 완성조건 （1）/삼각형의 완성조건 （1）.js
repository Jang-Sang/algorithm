// function solution(sides) {
//     var answer = 0;
//     return answer;
// }

// 배열 오름 차순으로 정렬하기 -> [0]+[1] >[2] 비교하기
const solution = (sides) => {
    let tri = sides.sort((a,b) => a-b)
    let answer = 0;
    if (tri[0] + tri[1] > tri[2]) {
        return answer = 1;
    } else {
        return answer = 2;
    }
    return answer;
}