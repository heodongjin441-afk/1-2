# # 매개변수에 초기값 미리 설정해놓기
# def say_myself(name, old, man=False):    # name, old = 필수 입력값
#     print("나의 이름은 %s입니다" % name)    # man=True : 기본값
#     print("나이는 %d살입니다" % old)    # 값을 입력하지 않으면 기본값이 사용됨
#     if man:
#         print("남자입니다")
#     else:
#         print("여자입니다.")

# result = say_myself("허동진", 16)
# print(result)

# 기본값이 있는 매개변수는 반드시 뒤에 작성해야 한다.
# 이유: 파이썬은 순서대로 값을 할당하기 때문에 기본값이 앞에 있으면 어디에 둬야 할지를 구분하지 못함
# 잘못 된 예
# def func(a=10, b):
# 올바른 예
# def func(a, b=10):

