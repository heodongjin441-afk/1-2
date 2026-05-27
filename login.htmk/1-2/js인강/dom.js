// Document Object Model = DOM
// HTML 코드를 해석해서 요소들을 트리 형태로 구조화해 표현하는 방식이다.
/* DOM은 자바스크립트을 사용해서 웹 화면의 콘텐츠를 추가, 수정, 삭제하거나 
이벤트를 처리할 수 있도록 인터페이스를 제공한다 */
// document의 querySelector 메소드는 선택자를 인자로 전달받아, 전달받은 선택자와 일치하는 문자 내 첫 번째 요소(element)를 반환한다. 
// 일치하는 요소가 없으면 null을 반환한다.
// 인자로 전달되는 선택자는 문자열 타입의 '유효한 CSS 선택자'를 의미한다.
// document.getElementById 메소드는 id를 인자로 전달받아,  전달받은 id와 일치하는 요소(element)를 반환한다.
// 일치하는 요소가 없으면 null을 반환한다.
// 인자로 전달되는 선택자는 문자열 타입의 'id'를 의미한다.

// console.log(document.querySelector("h1"))
// console.log(document.querySelector("p"))
// console.log(document.querySelector("#text")) // id
// console.log(document.querySelector(".paragraph")) // class

const h1 = document.querySelector("h1")
const p = document.getElementById("text")
console.log(h1.textContent)
h1.textContent = "헬로우 여러분!"

p.textContent = "겟엘리먼트바이아이디!!"
console.log(p.textContent);