#include <iostream>
int main(){
        int a = 17;
        printf("%d%%입니다.\n", a); // %출력하려면 %을 한번에 두번 써야한다
        std::string b = "성공률은";
        printf("%s %d%%입니다.\n", b.c_str(), a); // 문자열 출력하려면 .c_str()를 붙여야 한다.
        return 0; // 리턴 이후의 코드는 실행x
}