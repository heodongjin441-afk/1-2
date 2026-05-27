// function solution(numbers, k) {
//     const index = ((k-1) * 2) % numbers.length;
//     return numbers[index]
// }

// result = solution([1, 2, 3], 3)
// console.log(result)

// function solution(n) {
//     let count = 0;
//     for(let i = 1;i<=n;i++){
//         if(n % i === 0){
//             count++;
//         }
//     }
//     return count >= 3;
// }

// result = solution(10)
// console.log(result)

function solution(box,n){
    let count = 0;
    let sum = ((box[0] + box[1]) + box[2]) / n**2
    if (sum <= box.length){
        sum -= 1;
    }
    return sum;
}

result = solution([10, 8, 6], 2)
console.log(result)
function solution(num_list, n) {
    var answer = [];
   for(let i = 0;i<num_list.length;i+=n){
    answer.push(num_list.slice(i, i + n));
   }
    return answer;
}


result = solution([1, 2, 3, 4, 5, 6, 7, 8], 2)