// function solution(rsp) {
//     var answer = '';
//     return answer;
// }

const solution = (rsp) => {
return Array.from(rsp).map(a => {
        switch(+a) {
            case 2:
                return 0
            case 0:
                return 5
            default:
                return 2
        }
    }).join('');
}