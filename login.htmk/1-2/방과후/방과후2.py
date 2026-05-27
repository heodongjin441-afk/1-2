# # 3번
# N = 3
# for i in range(N):
#     i = i + 1
#     print("*" * i)

# # 1번
# a, b = map(int,input().split())
# print(a//b)
# print(a%b)

# # 2번
# A = int(input())
# if A >= 90 and A <= 100:
#     print("A")
# elif A >= 80 and A <= 89:
#     print("B")
# elif A >= 70 and A <= 79:
#     print("C")
# elif A >= 60 and A <= 69:
#     print("D")
# else:
#     print("F")

# # 4번
# N = int(input())
# n = list(map(int, input().split()))
# f = sum(n) / N
# count = 0
# for i in n:
#     if i >= f:
#         count += 1
#         print(count)
#  5번
a = input()
if a[0] == a[-1]:
    print("YES")
else:
    print("NO")