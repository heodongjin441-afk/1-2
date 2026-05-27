# def solution(num_list, n):
#     answer = 0
#     if n in num_list:
#         answer += 1
#     else:
#         answer += 0
#     return answer
# a = solution([1, 2, 3, 4, 5], 6)
# print(a)

# def solution(my_string):
#     answer = sorted(my_string.lower())
#     return "".join(answer)

# a = solution("Bcad")
# print(a)

# def solution(my_string):
#     answer = []
#     # 문자열을 처음부터 끝까지 한 글자씩 검사하며 숫자를 차곡차곡 담음
#     sum = [int(char) for char in my_string if char.isdigit()]
#     answer.extend(sum)
#     sum2 = sorted(answer)
#     return sum2

# a = solution("hi12392")
# print(a)

# def solution(start_num, end_num):
#     answer = []
#     for i in range(start_num, end_num -1, -1):
#         answer.append(i)
#     return answer

# a = solution(10, 3)
# print(a)

# a, b = map(int, input().strip().split(' '))
# print(f"{a} + {b} = {a + b}")