// for (초기값; 조건; 변경)
// for a in Range(5): = 파이썬.
// for구문 시작해줘 1=0부터... i<5작은 동안... i+=1해서 1씩 증가해줘

let x = 10;
for (let i = 0; i<5; i+=1){ // i+=1은 i = i+1이랑 같다.
    console.log('i = '+i);
   // console.log('x ='+x++);// x값을 출력하고 x값 증가
    console.log('x ='+ ++x); // x값을 증가 x값출력
}



let c = 11;
for (let d = 1; d<5; d+=1){
    console.log('d ='+d);
    console.log('c ='+c++)
}