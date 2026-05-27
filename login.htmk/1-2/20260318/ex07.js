const a = '10'; // string형 자료 타입
const b = 10;   // Number형 자료 타입

console.log(a==b); // True 자료형 까지 따지지 않음
console.log(a===b); // False 자료형 까지 따져서 구함.

console.log(10 != 5);  // 10과 5는 다르다 => True.

console.log(null==undefined); // null과 undifined는 같다 (자료형 타입 구분 X) => True
console.log(null===undefined);// null과 undifined는 같다 (자료형 타입 구분 O) => False