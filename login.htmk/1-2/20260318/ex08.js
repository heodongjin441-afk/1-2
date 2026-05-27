const a = 30;
const b = 20;
if (a<b){                   // if 구문의 뜻 : 만약에... 
    console.log("a는 b보다 작습니다"); // a가 b보다 작다면 30 > 20 => True.
} else{
    console.log("a는 b보다 큽니다."); // a가 b보다 크다면 30 < 20 => False.
}
console.log(a<b?"a는 작다":"a는 크다")