#include <iostream>
int main(){
    int a = 10;
    int b = 29;
    std::string c = "???";
    int d = a + b;
    printf("%d + %d = %s = %d", a, b, c.c_str(),  d);
    return 0;
}