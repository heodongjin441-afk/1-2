# for 문의 기본 구조
# for 변수 in 리스트(또는 튜플)

# test_list = ['one', 'two', 'three']
# for i in test_list:
#     print(i) # one two three 순서대로 i에 대입

# 다양한 for 문의 사용
# a = [(1, 2), (3, 4), (5, 6)] # 튜플
# for (first, last) in a:
#     print(first + last)

# number = 0
# score = [90, 60, 35, 87, 20]
# for mark in score:
#     number = number + 1
#     if mark >= 60:
#         print("%d번 학생은 합격입니다" %number)
#     else:
#         print("%d번 학생은 불합격입니다." % number)

# marks = [20, 80, 60, 50, 85]
# number = 0
# for score in marks:
#     number = number + 1
#     if score < 60:
#         continue
#     print('%d번 학생님 축하합니다, 합격하셨습니다' % number)

# add = 0
# for i in range(1, 11): # range는 리스트가 들어가는 자리 (1~10까지)
#     add = add + i
#     print(add)

for i in range(2, 10):
    for j in range(1, 10):
        print(i*j, end=" ")
        print('')