# # 1
# a, b = map(str, input().split())
# print(a, b)

# # 2
# a = [1, 2, 3, 4, 5]
# b = [num*2 for num in a]
# print(b)

# 3
# N = int(input())
# sum = []
# for i in range(1, N+1):
#     if i % 4 == 0:
#         continue
#     else:
#         sum.append(i)
# print(*sum)

# 4
# a = "I love Python"
# if "python" in a.lower():
#     print("Yes")
# else:
#     print("NO")

# 5
# num = int(input())
# num1 = list(map(int, str(num)))
# result = sum(num1)
# print(result)

# 6
a = ['A', 'B', 'A', 'C', 'B']
b = {}
for char in a:
    b[char] = b.get(char, 0) + 1
print(b)