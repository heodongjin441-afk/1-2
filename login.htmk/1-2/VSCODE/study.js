// function solution(flo) {
//     var answer = Math.floor(flo); //Math.floor()는 소수점을 버리는 함수이다
//     return answer;
// }

// const ret = solution(1.42);
// console.log(ret);
// // String과 BigInt는 대소문자 주의해서 써야한다. (JavaScript는 대소문자 구분하는 언어)

// function solution(arr, delete_list) {
//     // arr 배열에서 조건을 만족하는(filter) 원소만 남깁니다.
//     return arr.filter(num => {
//         // delete_list에 현재 숫자(num)가 포함되어 있지 않은지(!) 확인합니다.
//         return !delete_list.includes(num);
//     });
// }
// // filter() 메서드는 주어진 함수의 테스트를 통과하는 모든 요소를 모아 새로운 배열로 반환합니다.
// // includes() 메서드는 배열이 특정 요소를 포함하고 있는지 여부를 확인하여 true 또는 false를 반환합니다.
// function solution(arr, delete_list) {
//     let answer = [];
    
//     for (let i = 0; i < arr.length; i++) {
//         // 만약 delete_list에 arr[i]가 들어있지 않다면
//         if (!delete_list.includes(arr[i])) {
//             answer.push(arr[i]); // 바구니에 담기
//         }
//     }
    
//     return answer;
// }
// // includes() 메서드는 배열이 특정 요소를 포함하고 있는지 여부를 확인하여 true 또는 false를 반환합니다.

// function solution(my_string, target) {
//     if (my_string.includes(target)){
//         return 1;
//     }else{
//         return 0;
//     }
//     var answer = 0;
//     return answer;
// }

// const aip = solution("banana", "ana");
// console.log(aip);

// function solution(numbers){
//     for (let i = 0; i < numbers.length; i++) {
//         numbers[i] = numbers[i] * 2;
//     }
//     var answer = numbers;
//     return answer;
// }

// result = solution([1, 2,3,4,5])
// console.log(result)

// function solution(num1, num2) {
//     let arr = num1 % num2;
//     var answer = arr;
//     return answer;
// }

// result = solution(3, 2);
// console.log(result);

// function solution(n){
//     for(let i = 0; i <= n; i++){
//         let sum = i % 2 == 0
//         return i
//     }
//     var answer = [];
//     return answer;
// }

// result = solution(10)
// console.log(result)

// function solution(n) {
//     let sum = [];
//     for (let i = 0; i <= n; i++)
//         if (i % 2 != 0){
//             sum.push(i)
//         }
//     return sum
// }

// reuslt = solution(10)
// console.log(reuslt)

// function solution(n) {
//     let sum = 0;
//     for (let i = 0; i<= n; i++)
//         if(n % i === 0){
//             sum += i
//             console.log(`${i}개입니다`)
//         }
//     var answer = sum;
//     return answer;
// }

// result = solution(7)

// function solution(numbers, direction){
//     let sum = numbers[0]
//     let sum2 = numbers[1]
//     let sum3 = numbers[2]
//     if(direction === "right"){
//         kim = [numbers[sum], numbers[sum2], numbers[sum3]] = [numbers[sum3], numbers[sum], numbers[sum2]]
//         return kim
//     }else{
//        kim1 = [numbers[sum], numbers[sum2], numbers[sum3]] = [numbers[sum2], numbers[sum3], numbers[sum]]
//        return kim1
//     }
    
// }

// result = solution([1, 2, 3], "right")
// function solution(numbers, direction) {
//     // 원본 배열을 변경하지 않기 위해 복사본을 만듭니다.
//     let answer = [...numbers];
    
//     if (direction === "right") {
//         // 오른쪽으로 이동: 마지막 요소를 빼서 맨 앞에 넣기
//         // [1, 2, 3] -> 3을 빼고([1, 2]) -> 앞에 3 추가 ([3, 1, 2])
//         const lastItem = answer.pop();
//         answer.unshift(lastItem);
//     } else {
//         // 왼쪽으로 이동: 첫 번째 요소를 빼서 맨 뒤에 넣기
//         // [1, 2, 3] -> 1을 빼고([2, 3]) -> 뒤에 1 추가 ([2, 3, 1])
//         const firstItem = answer.shift();
//         answer.push(firstItem);
//     }
    
//     return answer;
// }

// console.log(solution([1, 2, 3], "right")); // 결과: [3, 1, 2]
// console.log(solution([1, 2, 3], "left"));  // 결과: [2, 3, 1]
// pop(): 배열의 마지막 요소를 제거하고 그 요소를 반환합니다.
// unshift(값): 배열의 맨 앞에 값을 추가합니다.
// push(값): 배열의 맨 뒤에 값을 추가합니다.
// (...)는 전개 연산자이다.

// function solution(numbers, k) {
//     for(let  i of numbers){
//         let sum = (i+=2);
//         return sum
//     }
// }

// result = solution([1, 2, 3, 4], 2)

function solution(message) {
    let answer = 0;
    for (let i = 0; i < message.length;i++){
        answer += 2;
    }
    return answer;
}

let result = solution("Happy Birthday!")
console.log(result)