// function solution(my_string) {
//     var answer = '';
//     return answer;
// }

const solution = (my_string) => {
    let splitarray = my_string.split("");
    let reversearray = splitarray.reverse("");
    let joinarray = reversearray.join("");
    
    return joinarray;
}