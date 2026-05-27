# 1 성과 이름 나눠서 출력하기
Family_Name = str(input('성 입력'))
Given_Name = str(input('이름 입력'))
print('성:',Family_Name)
print('이름:',Given_Name)

# 2 입력 받은 수에서 가장 큰 값 찾아서 출력하기
a = list(map(int, input().split()))
a.sort(reverse=True)
print(a[0])

# 3 입력받은 수를 활용해 별로 역삼각형으로 출력하기
N = int(input())
for i in range(N, 0, -1):
    print("*"*i)

# 4 리스트 안에 있는 값을 입력받으면 IN, 아니면 OUT
List = [1, 3, 5, 7, 9]
num = int(input())
if num in List:
    print("in")
else:
    print("Out")

# 5 문자열 오름차순 정렬후 join으로 사용
String = input()
nun = sorted(String)
print("".join(nun)) # 파이썬 내장함수 사용

# 6 10진수를 2진수로 변환하고 ob 제거
b = bin(int(input())) # 입력받은 10진수 2진수로 바꾸기(ob 포함)
print(b[2:]) # ob는 0, 1이기 때문에 2부터 출력