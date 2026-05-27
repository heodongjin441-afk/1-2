# 함수의 리턴값은 언제나 하나이다.

def add_and_mul(a, b): # 2개의 입력 인수를 받아 리턴하는 함수
    return a+b, a*b
result = add_and_mul(3, 4)
print(result) # 튜플 형태로 하나로 리턴함! 출력값은 (7, 12)

def a_and_mul(a, b): # return문을 2번 사용하면 리턴값은 하나뿐이다
    return a+b
    return a*b  # 리턴은 여러번 쓸 수 있다, 다만 인정되서 출력되는 return은 제일 먼저 쓰여진 return이며 나머지 
# return은 인정되지 않는다

result = a_and_mul(2, 3)
print(result)

def sn(n):
    if n == "바보":
        return
    else:
        print("나의 별명은 %s입니다", n)
print(sn("없음"))
print(sn("바보"))