const btn1 = document.getElementById('one')
const btn2 = document.getElementById('two')
const btn3 = document.getElementById('three')
const handleClick = function(){
    console.log("저를 클릭하셨나요?")
}

btn2.addEventListener('click', handleClick)
btn2.addEventListener('click', function(event){
    console.log(event.target)
})

btn2.addEventListener('click', handleClick)
btn2.addEventListener('click', handleClick)
btn2.addEventListener('click', handleClick)