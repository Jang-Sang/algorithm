// function solution(my_string) {
//     var answer = '';
//     return answer;
// }

const solution = (my_string) => {
    let str = 'aeiou'
    let newString = my_string.split('').filter((el)=>(!str.includes(el))).join('')
    
    return newString
    
}