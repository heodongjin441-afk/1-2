const button = document.getElementById('push')
const div = document.getElementById('area')

button.addEventListener('click', function(){
    console.log('div 생성 중!')
    const newDiv = document.createElement("div")
    div.appendChild(newDiv)
})