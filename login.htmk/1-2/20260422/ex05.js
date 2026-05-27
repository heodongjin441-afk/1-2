const person = {
    name:'이창현',
    age:25,
    gender:'남'
}

console.log(person)

person.legs = 2;
person.height = 100;

console.log(person)

delete person.legs;
console.log(person)
person.height = 105;
console.log(person)