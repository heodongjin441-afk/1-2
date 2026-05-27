function solution(my_string, letter) {
    var answer = '';
    for (let i = 0; i< my_string.length; i++){
         console.log(`i = ${i}`);
        console.log(my_string[i]);
        if(my_string[i] != letter)
            answer = answer + my_string[i]; // answer += my_string[i]; 랑 같다
    }
    return answer;
}

// my string[i] != f true이면 answer 넣고
// flase 이면 answer 넣지 않고


const result = solution("abcdef", "f") // "abcde"
console.log(result);

