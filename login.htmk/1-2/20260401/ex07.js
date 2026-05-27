function solution(start_num, end_num) {
    let answer = [];
    for (let i = start_num; i <= end_num; i++) {
        answer.push(start_num++)
        console.log(start_num)
    }
    return answer;
}

const ret = solution(3, 10);
console.log(ret);