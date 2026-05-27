const a = true;
const b = false;

console.log(a&&b); // "그리고"라는 뜻인데 b가 false라면 => false
console.log(a||b); // "또는"(or) 라는 뜻인데 한개만 true여도 true 출력 => true
console.log(!a);

// const d = false && 2+10; // 둘다 True가 아니기 때문에 False 출력
const d = true && 2+10;
console.log(d);