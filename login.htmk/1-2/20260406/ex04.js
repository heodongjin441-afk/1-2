const saveUser = "바깥유저";
function doA(){
    const saveUser = "저장된유저";
    console.log('지역' +saveUser);
}
doA();
console.log('전역' +saveUser);