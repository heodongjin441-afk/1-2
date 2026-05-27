/* 등가 비교를 할 때, 등호(=)개수에 따라 비교 규칙에 차이를 보인다
==는 '추상적(abstract) 같음 비교'로써 자료형이 다르더라도 같다고 판단 할 수 있는 비교이다
=== '엄격한(strict) 같음 비교로써, 자료형과 데이터가 모두 일치해야 같다고 판단한다 */
// console.log('1' == 1); // True
// console.log('1' === 1); // flase

// let num1 = 3;
// let num2 = 5;
// console.log(num1 > num2); // flase
// console.log(num1 < num2); // True

let num1 = '3';
let num2 = 3;
console.log(num1 != num2) // false 데이터 타입 상관없이 비교하기 때문이다
console.log(num1 !== num2) // 완전히 다르진 않기 때문에 true
