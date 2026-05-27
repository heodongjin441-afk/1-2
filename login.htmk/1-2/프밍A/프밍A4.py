# while문
# treehit = 0
# while treehit <= 10:
#     treehit = treehit + 1
#     print("나무를 %d번 찍었습니니다" %treehit)
#     if treehit == 10:
#         print("나무가 무너졌습니다")
#         break

# 타이머를 모티브로 만든 프로그램
# import time
# second = 0
# while second <= 60:
#     second = second +1
#     print("아직 %d초 지났습니다" %second)
#     time.sleep(0.1)
#     if second == 60:
#         print("1분이 다 되었습니다")
#         break

# propmt = """
# 1. Add
# 2. Del
# 3. List
# 4. Quit
# Enter number: """
# number = 0
# while number != 4:
#     print(propmt)
#     number = int(input())
#     if number == 4:
#         break

# coffee = 10
# money = 300
# while money:
#     print('돈을 받았으니 커피를 줍니다')
#     coffe = coffee - 1
#     print("남은 커피의 양은 %d개입니다" %coffe)
#     if coffee == 0:
#         print('커피가 다 떨어졌습니다, 판매를 중지합니다')
#         break

# continue 함수 사용해서 a % 2가 0이면 끊고 아니면 계속 실행하게 함
# a = 1
# while a < 10:
#     a = a + 1
#     if a % 2 == 0: continue
#     print(a)