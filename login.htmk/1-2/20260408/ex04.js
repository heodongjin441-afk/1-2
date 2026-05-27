function solution(numbers) {
    let was = 0;
    for(i = 0;i < numbers.length; i++){
        was = was + numbers[i];
    }
    var answer = was / numbers.length;
    return answer;
}

a = solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(a);