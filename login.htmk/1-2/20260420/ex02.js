// let 기본자료형 타입일 때 변경가능
// const 기본자료형 타입 변경불가, 오브젝트형은 예외적으로 변경 가능
function myTest(){
    if(true){
        let x = 100;
    }
    console.log(x);
}

myTest();