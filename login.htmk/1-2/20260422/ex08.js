function solution(arr, delete_arr){
    const answer = [];
    for (let i = 0;i<arr.length;i++){
        // console.log(`i = ${i}`)
        // console.log(arr[i])
        let result = true;
        for(let j=0; j < delete_arr.length;j++){
            // console.log(`j = ${j}`);
            if(arr[i] == delete_arr[j]){
                result = false; // 같을 때는 넣지마라
            }
        }
        if(result) {
            answer.push(arr[i]);
            result = true;
        }
        return answer;
    }
}
const ret = solution([293, 1000, 395, 678, 94], [94, 777, 104, 1000, 1, 12])
console.log(ret)