#include <iostream>
int main(){
    std::cout << 10 << std::endl;
    std::cout << 10U << std::endl; // U는 unsigned int를 의미, 양수만 저장할 수 있음
    std::cout << 10.5F << std::endl; // F는 float를 의미, 소수점이 있는 숫자를 저장할 수 있음
    std::cout << 10.5 << std::endl; // 소수점이 있는 숫자를 저장할 수 있음, double이 기본형임
    std::cout << 3 + 4 << std::endl; // 덧셈 연산자
    return 0;
}