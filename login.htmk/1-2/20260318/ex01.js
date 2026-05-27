var score = [];
score.push(10);
score.push(20);
console.log(score);

// var -> let, const
// number string bolean null undefind object 
// 값에 변경이 가능한 경우에 let 키워드 사용
// 값에 변경이 불가능한 경우에는 const 키워드 사용
// 선언 초기화...
var a = 10;
var a = 20; // 두번 선언이 가능해 var 코드는 거의 쓰지 않음 
console.log(a);

let b = 10;
b = 20;     // 중복선언 X
console.log(b);


const c = 30;
c = 40;   // 값 변경 불가능
console.log(c);

// 중복하게 문제가 됩니다. var score = 100;