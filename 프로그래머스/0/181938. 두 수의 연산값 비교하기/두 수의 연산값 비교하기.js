// function solution(a, b) {
//     var answer = 0;
//     return answer;
// }

const solution = (a, b) => {
    const ab = String(a) + String(b)
    const ab2 = 2*a*b
    
    return ab >= ab2 ? Number(ab) : Number(ab2)
}