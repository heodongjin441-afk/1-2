function solution(start_num, end_num) {
     // let 기본자료형 변경 가능
    // const 기본자료형 변경 불가 오브젝트형은 변경 가능
    const answer = [];
    for (let i = start_num; i <= end_num; i++) {
        console.log(`i = ${i}`);
        answer.push(i);
    }
    console.log(answer);
    return;
}
const result = solution(3, 5);
console.log(result);