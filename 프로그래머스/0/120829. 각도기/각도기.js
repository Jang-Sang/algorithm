// function solution(angle) {
//     var answer = 0;
//     return answer;
// }

const solution = (angle) => {
    if(0 < angle && angle < 90){
         return 1
    } else if (angle === 90) {
         return 2
    } else if ( 90 < angle && angle < 180) {
         return 3
    } else {
         return 4
    }
}

// 0 < angle < 90 이러한 조건은 사용이 불가능하다.

