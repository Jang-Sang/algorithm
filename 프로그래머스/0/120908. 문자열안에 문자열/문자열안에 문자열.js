// function solution(str1, str2) {
//     var answer = 0;
//     return answer;
// }

//.includes() 사용하여 안에 내용이 있는지 확인
const solution = (str1, str2) => {
    let result = 0;
    if (str1.includes(str2) === true){
        return result = 1
    } else if (str1.includes(str2) === false) {
        return result = 2
    }
    return result;
}