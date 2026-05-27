#  1번
# A, B = map(int, input().split())
# print(A + B)

#  2번

# N = int(input())
# if N % 2 == 0:
#     print("짝수")
# else:
#     print("홀수")

# 3번
A, B = map(int, input().split())
sum = 0
for i in range(A, B + 1):
    sum += i
    print(sum)

# 4번
N = list(input())
for i in N:
    print(N.index(max(N)))
    break

# 5번
N = list(input())
a = dict.fromkeys(N)
print(sorted(a))

# 6번
