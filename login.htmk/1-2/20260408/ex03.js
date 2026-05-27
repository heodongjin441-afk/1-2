// 선언부에서는 매개변수 3개
const aa = function(a, b = 20, c = 30){
console.log(`a ${a} b ${b} c ${c}`)
}

// 호출부에서는 매개변수 1개
aa(10);

let temp = '값을할당';

temp = temp ?? '앞에꺼 null, undefind'; // 앞에 temp에 값을할당이라고 해서 여기 구문은 실행되지 않음

console.log(`temp ${temp}`);