function solution(strlist) {
    var answer = [];
    for(let i = 0; i< strlist.length;i++){
        // console.log(strlist)
        answer.push(strlist[i].length);
    }
    return answer;
}


let result = solution(["We", "are", "the", "world!"])
console.log(result)