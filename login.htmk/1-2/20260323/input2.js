const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('입력하세요\n', function(ans){
    console.log(ans);
    // 나누었을 때 나머지가 0이면 짝수
    if(ans >= 60){
        console.log('통과')
    }
    else{
        console.log('미통과')
    }
    rl.close()
});