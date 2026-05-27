function solution(num_list) {
    let sum1 = 1; // 곱하기 했는값
    let sum2 = 0; //더하기 해서 제곱값
    for(let i = 0; i < num_list.length;i++){
        console.log(num_list[i]);
        sum1 = sum1 * num_list[i];
        sum2 = sum2 * num_list[i];
    }
    console.log(`sum1= ${sum1}`);
    console.log(`sum2= ${sum2}`);
    if(sum1<(sum2*sum2))
        return 0;
    else
        return 1;
    var answer = 1110;
    return answer;
}

console.log(solution([3, 4, 5, 2, 1]));