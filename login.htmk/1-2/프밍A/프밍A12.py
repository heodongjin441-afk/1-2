# 사용자가 원한다면 input을 써서 a에 원하는 값을 그때그때 입력할수있다.
# input으로 입력받은 값은 무조건 문자열로 저장된다.
# a = int(input('숫자를 입력하세요:')) 정수로 변환
# # print('출력:', a)
# # print(type(a))  <class 'str'>
# b = float(input('숫자를 입력하세요')) 실수로 변환
# print(a + b)
# print((a * 3) + (b * 3))
# height = input('키를 입력하세요(cm):')
# height = float(height) # 'height = float(input('키를 입력하세요(cm):'))'과 같다.
# print(height / 100) # 미터 단위로 변환

# print('Life'"is""too short")
# print('life' + 'is' + 'too short') # 따옴표는 플러스 연산 처럼 쓸수있다.
# print('life', 'is', 'too', 'short') # 쉼표는 띄어쓰기가 적용이 된다.

# print('2025', '08', '17', sep='-')
# print('점프', '투', '파이썬', sep=' To ') # sep으로 To를 집어넣기

# for i in range(10):
#     print(i, end='') # 한줄 띄어쓰기, end로 9까지 출력, 한줄 바꿔 쓰고 싶으면 \n을 같이 쓰면 된다

# num1 = float(input('첫 번째숫자를 입력하세요:'))
# num2 = float(input('두 번째 숫자를 입력하세요:'))
# # f"…{변수}…"
# print(f"{num1} + {num2} =", num1 + num2)
# print(f"{num1} - {num2} =", num1 - num2)
# print(f"{num1} * {num2} =", num1 * num2)
# print(f"{num1} / {num2} =", num1 / num2)