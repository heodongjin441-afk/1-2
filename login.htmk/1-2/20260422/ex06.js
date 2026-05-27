// let 기본자료형 변경가능 오브젝트 변경가능
// const 기본자료형 변경 불가 오브젝트 변경가능

// const 로 선언하면 프로피티 추가삭제수정가능하지만
// 새로운 객체(오브젝트)를 담는것은 불가능하다
let sum = 10;

const car = {
    // 객체 안에 들어있는 변수
    // 프로피티, 속성
    name:"쏘나타",
    brand:"현대자동차",
}
car.doDrive = () => {
    console.log('소나타 부르릉');
}
// car = {};
console.log(car)
car.doDrive(); // 함수 호출

// let answer = '$';
// answer += '$';
// answer += '$';
// answer += '$';
// console.log(answer)