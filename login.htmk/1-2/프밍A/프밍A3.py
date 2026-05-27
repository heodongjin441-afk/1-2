# if = 주어진 조건을 판단한 후 그 상황에 맞게 처리해야 할 경우에 쓰인다
# money = int(input())
# if money:
#     print("택시를 타고 가라")
# else:
#     print("걸어가라")

# # 들여쓰기 = If문을 만들 때는 if 조건문 바로 다음 문장부터 모든 문장에 들여쓰기(indentation)
# # 들여쓰기를 하지 않은 if문은 에러난다.

# # 조건문 = if조건문에서 '조건문'이란 참과 거짓을 판단하는 문장이다.
# # 같다 ==, 다르다 !=, 크거나같다 >=, 작거나 같다<=
# a, b = map(int, input().split())
# if a >= b:
#     print("A")
# else:
#     print("B")

# # 돈이 3000원 이상이어야 택시를 타세요 출력 아니면 걸어가세요 출력
# mo = int(input())
# if mo >= 3000:
#     print("택시를 타세요")
# else:
#     print("걸어가세요")

# x or y (둘중 하나만 참이라도 "참" 출력), x and y (둘다 참이여야 "True"출력), not x (x가 아니여야함)

# money = int(input())
# card = True
# if money >= 3000 or card:
#     print("택시를 타고 가세요")
# else:
#     print("걸어가세요")

# in = ~가 00안에 있는가? not in = ~가 00안에 없는가?
# pocket = ['paper', 'cellphone']
# card = True
# if 'money' in pocket:
#     print("택시 타고 가라")
# else:
#    if card:
#        print("택시 타고 가라")
#    else:
#        print("걸어가라")

# elif = 이전 조건문이 거짓일 때 수행된다.
# pocket = ['paper', 'cellphone']
# card = True
# if 'money' in pocket:
#     print("택시를 타라")
# elif card:
#     print("택시를 타라")
# else:
#     print("걸어 가라")

# 조건부 표현식
# score = int(input())
# if score >= 60:
#     message="success"
# else:
#     message = "failure"
#     print(message)

# message = "success" if score >= 60 else ("failure") # 아니면 print("failure")
# print(message)

weight = int(input())
message = "정상" if weight <= 95 else ("비만")
print(message)