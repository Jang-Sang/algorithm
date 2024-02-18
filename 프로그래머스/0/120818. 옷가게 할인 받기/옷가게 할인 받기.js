// function solution(price) {
//     var answer = 0;
//     return answer;
// }

// 각 가격대별로 설정해서 가격을 조건문으로 출력
const solution = (price) => {
    let result = 0;
    if ( price >= 10 && price < 100000) {
        return result = Math.floor(price)
    } else if (price >= 100000 && price < 300000) {
        return result = Math.floor(0.95 * price)
    } else if ( price >= 300000 && price < 500000) {
        return result = Math.floor(0.9 * price)
    } else if ( price >= 500000) {
        return result = Math.floor(0.8 * price)
    }
    return result;
}