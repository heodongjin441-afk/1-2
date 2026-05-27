# add = 함수를 만들 때 사용하는 예약어
# 함수 이름은 임의로 생성 가능 ex) add()
# 매개변수는 함수에 입력으로 전달되는 값을 받는 변수
# return 함수의 결괏값(리턴값)을 돌려주는 명령어
# def add(a, b):
#     return a + b

# print(add(3, 4)) 

# 일반함수
# def add(a, b):
#     result = a + b
#     return result

# a = add(3, 4)
# print(a)

# 매개변수가 없는 함수
# def say():
#     return "HI"

# a = say()
# print(a)

# 리턴값이 없는 함수
# def add(a, b):
#     print("%d, %d의 합은 %d입니다." % (a, b, a+b))

# add(3, 4) # a = add(3, 4)도 가능하다

# def add(a, b):
#     print("%d, %d의 합은 %d입니다." % (a, b, a+b))

# a = add(3, 4) # 함수에 리턴값이 없기 때문에 print문을 실행하고 a에 NONE 값이 저장되며 두번째 print문을 쓸 때 NONE이 출력됨
# print(a)

# 매개변수랑 리턴값 둘다 없음
# def say():
#     print("HI")

# print(say())

# 매개변수 지정해서 사용 -> 매개변수 순서에 상관없이 사용할 수 있는 장점
# def sub(a, b):
#     print(a-b)
#     return a - b
# result = sub(7,3) # result = sub(a=7, b=3)으로 써도 된다
# print(result)