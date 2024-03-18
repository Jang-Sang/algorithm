// function solution(num_list) {
//     var answer = 0;
//     return answer;
// }


const solution = (num_list) => {
    let answer = 0;
    if (num_list.length >= 11){
        answer = num_list.reduce((accumulator, current) => accumulator + current, 0)
    }else{
        answer = num_list.reduce((accumulator, current) => accumulator * current, 1)
    }
    return answer;
}