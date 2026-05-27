// function solution(name, n){
//     let sum = name.split("").map(char => char.repeat(n)).join("");
//     return sum
// }

// result = solution("허동진", 2)
// console.log(result)

// function solution(n, k) {
//     let soda = 0;
//     for (let i = 10; i<=n;i+=10){
//         if(n >= i){
//             soda += 1
//         }
//     }
//     let num = (n * 12000) + (k * 2000) - (2000 * soda)
//     return num;
// }

// let result = solution(10, 3)
// console.log(result)

// function solution(n) {
//     let sum = 0;
//     for(let i = 0;i<=n;i++)
//         if(i % 2 === 0){
//             sum+=i
//         }
//    return sum;
// }

// let result = solution(4)
// console.log(result)

// function solution(n) {
//     let count = 0;
//     for(let i = 0; i <= n; i++){
//         if(n % i === 0){
//             count++
//         }
//     }
//     return count;
// }

// result = solution(20)
// console.log(result) 순서쌍 구하는 문제


// function solution(dot){
//     if(dot[0] > 0 && dot[1] > 0){
//         return 1
//     }else if (dot[0] < 0 && dot[1] > 0){
//         return 2
//     }else if (dot[0] < 0 && dot[0] < 0){
//         return 3
//     }else{
//         return 4
//     }
// }

// result = solution([-7, 9])
// console.log(result) 제 몇 사분면인지 묻는 문제

// function solution(numbers) {
//     numbers.sort((a, b) => b - a)
//     let sum = numbers[0] * numbers[1]
//     return sum
// }

// result = solution([1, 2, 3, 4, 5])
// console.log(result)

// function solution(my_string) {
//     let sum = my_string.replace(/[aeiou]/g, "");
//    return sum
// }

// result = solution("bus")
// console.log(result)

// function solution(sides) {
//     sides.sort((a, b) => a - b)
//    if (sides[0] + sides[1] <= sides[2]){
//     return 2 // 더 작아야함
//    }else{
//     return 1 // 더 커야함
//    }
// }

// result = solution([3, 6, 2])
// console.log(result)

// function solution(n, numlist) {
//     let sum = [];
//     for (let i of numlist){
//         if(i % n === 0){
//             sum.push(i)
//         }
//     }
//     return sum;
// }

// result = solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])
// console.log(result)

// function reverseCase(str) {
//     let result = "";
//     for(let i of str){
//         if(i === i.toUpperCase()){
//             result += i.toLowerCase()
//         }else{
//             result += i.toUpperCase()
//         }
//     }
//     // 이 부분을 채워주세요!
//     return result
// }

// // 테스트용
// console.log(reverseCase("tEST cASE")); // 결과가 "Test Case"가 나오면 정답!

// function maskChar(str, target) {
//     let result = "";
//     for (let i of str){
//         if (i === target.toUpperCase() || i === target.toLowerCase()){
//             result += '*'
//         }else{
//             result += i
//         }
//     }
//     // 이 부분을 완성해 보세요!
    
//     return result;
// }

// // 테스트용
// console.log(maskChar("Apple is an Awesome fruit", "a")); 
// // 예상 결과: "*pple is *n *wesome fruit"

// function extractNumbers(str) {
//     let result = "";
//     for (let i of str) {
//         // i가 "0"보다 크거나 같고, "9"보다 작거나 같은지 확인해보세요!
//         if (i >= "0" && i <= "9") {
//             // 여기에 숫자를 result에 담는 코드를 작성하세요.
//             result += i
//         }
//     }
//     return result;
// }

// // 테스트용
// console.log(extractNumbers("abc123def45")); // 예상 결과: "12345"
// console.log(extractNumbers("Year 2026!!")); // 예상 결과: "2026"

// function coolTyping(str) {
//     let result = "";
//     for (let i = 0; i < str.length; i++) {
//         // i가 짝수인지 홀수인지에 따라 str[i]를 변환해서 result에 더해주세요!
//         if (i % 2 === 0) {
//             // 짝수 인덱스일 때 로직
//             result += str[i].toUpperCase()
//         } else {
//             // 홀수 인덱스일 때 로직
//             result += str[i].toLowerCase()
//         }
//     }
//     return result;
// }

// // 테스트용
// console.log(coolTyping("javascript")); // 예상 결과: "JaVaScRiPt"
// console.log(coolTyping("HELLO"));      // 예상 결과: "HeLlO"

// function solution(my_string){
//     var answer = '';
//     for (let i of my_string){
//         if(i === i.toUpperCase()){
//             answer += i.toLowerCase()
//         }else{
//             answer += i.toUpperCase()
//         }
//     }
//     return answer
// }

// result = solution('cccCCC')
// console.log(result)

// const fruits = ['apple', 'banana', 'kiwi', 'strawberry', 'pear'];

// // 여기에 코드를 작성해 보세요!
// const longFruits = fruits.filter(fruit => { return fruit.length > 5
//     // 여기에 조건을 적으세요.
// });

// console.log(longFruits); // 예상 결과: ["banana", "strawberry"]


// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const filteredNumbers = numbers.filter(num => {
//     // 여기에 '3으로 나눈 나머지가 0이 아니다'라는 조건을 return 하세요!
//     return num % 3 !== 0
// });

// console.log(filteredNumbers); 
// // 예상 결과: [1, 2, 4, 5, 7, 8, 10]

// const data = [1, "2", 4, "apple", 6, 9, 10, "12"];

// const result = data.filter(item => {
//     // 1. item의 타입이 'number'인가?
//     // 2. AND(&&)
//     // 3. item을 2로 나눈 나머지가 0인가?
//     return typeof item === 'number' && item % 2 === 0
// });

// console.log(result); 
// // 예상 결과: [4, 6, 10] 
// // (주의: "2"나 "12"는 문자열이라서 제외되어야 합니다!)

// const products = [
//     { name: "콜라", price: 1500 },
//     { name: "샌드위치", price: 3500 },
//     { name: "커피", price: 2000 },
//     { name: "껌", price: 500 },
//     { name: "도시락", price: 5000 }
// ];

// const expensiveProducts = products.filter(item => {
//     // item은 객체 하나(예: { name: "콜라", price: 1500 })를 의미합니다.
//     // 여기서 price를 꺼내서 2000 이상인지 확인해보세요!
//     return item.price >= 2000;
// });

// console.log(expensiveProducts);
// // 예상 결과: [
// //   { name: "샌드위치", price: 3500 },
// //   { name: "커피", price: 2000 },
// //   { name: "도시락", price: 5000 }
// // ]

// const inventory = [
//     { name: "샤인머스캣 포도", stock: 10 },
//     { name: "꿀사과", stock: 5 },
//     { name: "캠벨 포도", stock: 20 },
//     { name: "제주 한라봉", stock: 15 }
// ];

// const grapes = inventory.filter(item => {
//     // 여기에 코드를 작성하세요!
//     return item.name.includes('포도')
// });

// console.log(grapes);
// // 예상 결과: [ { name: "샤인머스캣 포도", stock: 10 }, { name: "캠벨 포도", stock: 20 } ]

// function solution(array, n) {
//     var answer = 0;
//     for(let i of array){
//         if(i === n){
//             answer += 1
//         }
//     }
//     return answer;
// }


// result = solution([1, 1, 2, 3, 4,5], 1)
// console.log(result)

// function solution(num_list) {
//     let count = 0;
//     let sum = 0;
//     for(let i of num_list){
//         if(i % 2 === 0){
//             count += 1
//         }else{
//             sum += 1
//         }
//     }
//     let answer = [count, sum];
//     return answer;
// }

// result = solution([1, 2, 3, 4, 5])
// console.log(result)

// function solution(my_string, n) {
//     var answer = my_string.split('').map(YEE => YEE.repeat(n)).join('');
//     return answer;
// }

// result = solution('hello', 3)
// console.log(result)


// function solution(my_string, letter) {
//     var answer = my_string.split('').filter(char => char !== letter).join('');
//     return answer;
// }

// result = solution('abcdef', 'f')
// console.log(result)

// function solution(angle) {
//     var answer = 0;
//     if (angle < 90) {
//         answer = 1;
//     } else if (angle === 90) {
//         answer = 2;
//     } else if (angle < 180) {
//         answer = 3;
//     } else {
//         answer = 4;
//     }
//     return answer;
// }

// result = solution(70);
// console.log(result)

// function solution(n, k) {
//     let count = 0;
//    for(let i = 10;i <= n; i+=10){
//     count += 1
//    }
//    let sum = (12000 * n) + (2000 * k) - (2000 * count);
//    return sum
// }

// result = solution(10, 3)
// console.log(result)

// function solution(numbers) {
//     numbers.sort((a, b) => b - a);
//     let answer = numbers[0] * numbers[1];
//     return answer;
// }

// result = solution([1, 2, 3, 4, 5])
// console.log(result)

// function solution(my_string) {
//     var answer = 0;
//     for (let i of my_string){
//         if (i >= '0' && i <= '9'){
//             answer += Number(i)
//         }
//     }
//     return answer;
// }

// result = solution('abc123def45')
// console.log(result)

// 

// function solution(my_string){
//     var answer = '';
//     for (let i of my_string){
//         if(i === i.toUpperCase()){
//             answer += i.toLowerCase()
//         }else{
//             answer += i.toUpperCase()
//         }
//     }
//     return answer;
// }

// result = solution('cccCCC')
// console.log(result)

// function solution(n, numlist) {
//     var answer = [];
//     for (let i of numlist){
//         if(i % n === 0){
//             answer.push(i)
//         }
//     }
//     return answer;
// }

// result = solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12])
// console.log(result)

// function solution(n){
//     var answer = [...String(n)];
//     return answer.reduce((a, b) => {return a + Number(b)}, 0)
// }

// result = solution(1234)
// console.log(result)


// function solution(order) {
//     return [...String(order)].reduce((acc, cur) => {
//         // 현재 숫자(cur)가 3, 6, 9 중 하나라면 누적값(acc)에 1을 더함
//         if (['3', '6', '9'].includes(cur)) {
//             return acc + 1;
//         }
//         return acc; // 아니면 그대로 유지
//     }, 0);
// }

// result = solution(29423)
// console.log(result)

// function solution(numbers, n) {
//     var answer = 0;
//     for (let i of numbers){
//         answer += i
//         if(answer > n){
//             return answer
//         }
//     }
//     return answer;
// }

// result = solution([34, 5, 71, 29, 100, 34], 123)
// console.log(result)

// function drinkEnergy(drinks) {
//     let totalEnergy = 0;
    
//     // 이 아래에 코드를 작성해 보세요!
//     // 1. for...of 문을 사용하여 drinks 배열을 순회합니다.
//     // 2. totalEnergy에 현재 드링크의 에너지를 더합니다.
//     // 3. 만약 totalEnergy가 100보다 커지면 즉시 totalEnergy를 리턴합니다.
//     for (let i of drinks){
//         totalEnergy += i
//         if(totalEnergy > 100){
//             return totalEnergy
//         }
//     }

//     // 루프가 끝난 후 최종 합계를 리턴합니다.
//     return totalEnergy;
// }

// // 테스트 케이스
// const myDrinks = [20, 30, 40, 15, 10]; 
// console.log(drinkEnergy(myDrinks)); 
// // 예상 결과: 105 (20+30+40+15를 더하는 순간 100을 넘기 때문)

// function multiplyOdds(numbers){
//     let sum = numbers.filter(YEE => {return YEE % 2 === 1})
//     let sum1 = sum.reduce((arr, cham) => {return arr * cham}, 1)
//     return sum1
// }

// let result = multiplyOdds([1, 2, 3, 4 ,5, 6])
// console.log(result)

// function makeSecretCode(words){
//     var answer = words.filter(YEE => {return YEE.length >= 5});
//     let sum = answer.reduce((cham, cur) => {return cham + cur[0]}, '')
//     return sum;
// }

// let myWords = makeSecretCode(["apple", "banna", "cat", "dog", "elephant"])
// console.log(myWords)


// function solution(my_string, k) {
//     var answer = my_string.repeat(k)
//     return answer;
// }

// let result = solution("string", 3)
// console.log(result)

// function solution(my_string, n) {
//     var answer = my_string.slice(-n);
//     return answer;
// }

// let result = solution("ProgrammerS123", 11)
// console.log(result)

// function solution(dot) {
//     var answer = 0;
//     if (dot[0] > 0 && dot[1] > 0) {
//         answer = 1;
//     } else if (dot[0] < 0 && dot[1] > 0) {
//         answer = 2;
//     } else if (dot[0] < 0 && dot[1] < 0) {
//         answer = 3;
//     } else {
//         answer = 4;
//     }
//     return answer;
// }

// result = solution([-7, 9])
// console.log(result)

// function solution(numbers, num1, num2) {
//     var answer = numbers.slice(num1, num2 + 1);
//     return answer;
// }

// let result = solution([1, 2, 3, 4, 5], 1, 3)
// console.log(result)

// function solution(n, t) {
//     for (let i = 0; i < t; i++){
//         n *= 2
//     }
//     return n;
// }

// let result = solution(2, 10)
// console.log(result)


// function solution(array, height) {
//     var answer = 0;
//     return answer;
// }


// let reuslt = solution([139, 148, 150, 190, 200], 150)
// console.log(reuslt)

// function solution(str1, str2) {
//     // includes 결과가 true면 1, false면 2
//     return str1.includes(str2) ? 1 : 2;
// }

// // 호출할 때 배열([])을 빼고 문자열만 넣어야 합니다.
// let result = solution("ab6CDE443fgh22iJKlmn1o", "6CD");
// console.log(result); // 결과: 1

//  function transportSolution(weight) {
//     const ants = [10, 7, 3, 1]; // 개미 종류를 배열로 관리
//     let totalCount = 0;

//     ants.forEach(antWeight => {
//         totalCount += Math.floor(weight / antWeight);
//         weight %= antWeight;
//     });

//     return totalCount;
// }

// let result = transportSolution(15)
// console.log(result)

// function solution(myString, pat) {
//     var answer = 0;
//     // A면 B로 B면 A로 바꿔주는 로직을 작성해보세요!
//     let convertedString = myString.split('').map(char => char === 'A' ? 'B' : 'A').join('');
//     // 변환된 문자열이 pat를 포함하는지 확인해보세요!
//     if (convertedString.includes(pat)) {
//         answer = 1;
//     } else {
//         answer = 0;
//     }
//     return answer;
// }

// const result = solution("ABBAA", "AABB")
// console.log(result)

// function solution(arr, n) {
//     var answer = [];
//     // arr의 길이가 짝수이면 홀수 인덱스에 n을 더해주고, arr의 길이가 홀수이면 짝수 인덱스에 n을 더해주는 로직을 작성해보세요!
//     if (arr.length % 2 === 0) {
//         answer = arr.map((num, index) => index % 2 === 1 ? num + n : num);
//     } else {
//         answer = arr.map((num, index) => index % 2 === 0 ? num + n : num);
//     }
//     return answer;
// }

// const result = solution([49, 12, 100, 276, 33], 27)
// console.log(result)

// function solution(arr1, arr2) {
//     var answer = 0;
//     if(arr1.length > arr2.length){
//         answer += 1
//     }else if(arr1.length === arr2.length){
//         const sum1 = arr1.reduce((acc, cur) => acc + cur, 0);
//         const sum2 = arr2.reduce((acc, cur) => acc + cur, 0);
//         if (sum1 > sum2) {
//             answer += 1;
//         } else if (sum1 < sum2) {
//             answer += -1;
//         }
//     }else{
//         answer += -1
//     }
//     return answer;
//

// const result = solution([49, 13], [70, 11, 2])
// console.log(result)