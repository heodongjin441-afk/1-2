let kk = 100; // 표준 개발 방법, 전역 변수 = 함수 밖에 있는 변수

function doA(cc){
    let kk = 20;
    console.log(`kk = ${kk}`);
    let aa = 10;
    console.log(aa);
    console.log(`cc = ${cc}`);
    // let dd = 20;
    console.log(`kk = ${kk}`);
}
function doB(cc) {
    let aa = 20;
    console.log(aa);
    console.log(`cc = ${cc}`);
    // console.log(dd);
}

doA(10);
doB();