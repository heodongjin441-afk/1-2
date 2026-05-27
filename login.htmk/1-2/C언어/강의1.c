// include - 뭔가를 가져오다
// <stdio.h> - c언어 내장 라이브러리
// i(input) - 입력 - 표준입력
//  o(output)- 출력 - 표준출력
// int = 함수의 리턴 타입
// return = 함수의 리턴 value
// ""로 감싸야 문장, ''로 감싸면 문자로 처리된다

// %d = demical => 10진수 정수
// 서식지정자

#include <stdio.h>
int main(){
    printf("c언어 방학특강!\n");
    int a = 20;
    int c = a * 10;
    printf("%d * 10=%d", a, c);
    return 0;
}