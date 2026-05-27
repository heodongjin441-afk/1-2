# 리스트 안에 for문 포함하기 (리스트 컴프리헨션 사용하기)
# a = [1, 2, 3, 4]
# result = []
# for num in a:
#     result.append(num*3)
#     print(result)

# num에 a 리스트들을 대입하고 곱하기 3을 한다
# a = [1, 2, 3, 4]
# result = [num*3 for num in a]
# print(result)
# if랑 for문 둘다 사용
# a = [1, 2, 3, 4]
# result = [num*3 for num in a if num % 2 == 0]
# print(result)

# 구구단
# result = [x*y for x in range(2, 10) # result 안에 x곱하기 y, x에는 범위 2~9까지 모두, y에는 1~9까지 모두 범위 
#           for y in range(1, 10)]
# print(result)

# 되새김 문제
# a = 'Life is too short, you need python'
# if 'wife' in a:  # 중간에 셔츠가 참이기에 셔츠만 출력하고 끝난다
#     print('wife')
# elif 'python' in a and "you" not in a : 
#     print('python')
# elif 'shirt' not in a: 
#     print('shirt')
# elif 'need' in a: 
#     print("need")
# else:
#     print("none")

# result = 0
# i = 1
# while i <= 1000:
#     if i % 3 == 0:
#         result += i
#     i += 1
#     print(result)

# for i in range(1, 101):
#     print(i)

# 평균값 구하기
# a = [70, 60, 55, 75, 95, 90, 80, 85, 100]
# print(sum(a) / len(a))

# i = 0
# while True:
#     i += 1
#     if i > 5:
#         break
#     print("*" * i)

# numbers = [1, 2, 3, 4, 5]
# result = []
# for n in numbers:
#     if n % 2 == 1:
#         result.append(n*2)
#         print(result)

# numbers = [1, 2, 3, 4, 5]
# result = [n*2 for n in numbers if n % 2 == 1]
# print(result)

