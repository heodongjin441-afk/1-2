# # set()에 리스트를 입력하여 생성
# s1 = set([1, 2, 3])
# print(s1)
# # set()에 문자열을 입력하여 생성
# s2 = set("Hello")
# print(s2)
# # 집합 자료형의 특징 = 중복 허용 x, 순서가 없음(인덱싱 사용 불가능), 인덱싱 사용을 원할 경우 튜플로 변경 필요.
# s1 = set([1, 2, 3])
# li = list(s1) # 리스트로 변환
# print(li[2]) 

# t1 = tuple(s1) # 튜플로 변환
# print(t1[1])

# # set 자료형 유용하게 사용 가능
# s1 = set([1, 2, 3, 4, 5, 6])
# s2 = set([4, 5, 6, 7, 8, 9])

# # 교집합 구하기 = &함수나 intersection()함수 사용 = > 공통된 숫자만
# print(s1 & s2)
# print(s1.intersection(s2))

# # 합집합 구하기 = |기호나 union()함수 사용 => 중복된 결과도 한개씩 출력하며 중복되지 않은 숫자들도 다 출력함
# print(s1 | s2)
# print(s1.union(s2))

# # 차집합 구하기 = '-'기호나 difference() 함수 사용 => 중복된 값들은 출력 x, s1-s2 일시 s1에 있는 값들만 출력(s2와 중복된 값 출력 x)
# print(s1-s2)
# print(s1.difference(s2))
# print(s2-s1)
# print(s2.difference(s1))

# # 집합 자료형 관련 함수 -add, -update, -remove

# # add 함수 사용.
# s1 = set([1, 2, 3])
# s1.add(4) # add 함수를 통해서 s1에 4를 추가한다.
# print(s1)

# # update는 add와 같지만 여러개를 추가할수있다는게 장점이다. s1.update([])
# s1 = set([1, 2, 3])
# s1.update([4, 5, 6])
# print(s1)

# # 특정 값을 제거하는 함수 remove -> 리스트 안에 있는 값을 삭제시킴
# s1 = set([1, 2, 3])
# s1.remove(2) # 리스트 안에 있는 2 라는 값을 삭제
# print(s1)

# # bool -> 참(True)와 거짓(False)를 나타내는 자료형
# a = 123
# print(bool(a))
# b = 0
# print(bool(b)) 
# # 조건문의 반환 값으로도 사용됩니다
# if 1 == 1:
#     print(True)
# else:
#     print(False)

# # 리스트와 숫자의 참/거짓
# a = [1, 2, 3]
# print(bool(a)) # list
# print(bool(0)) # 숫자
# print(bool(""))

# # 변수를 만드는 방법
# a = 1
# b = "python"
# c = [1, 2, 3]

# # 객체 = 자료형과 같은 것을 의미하는 말
# a = [1, 2, 3]
# print(id(a))

# # b 변수에 a 변수를 대입하면 완전히 동일
# b = a
# print(id(b)) # id 함수로 확인
# print(a is b) # 파이썬 명령어로 ㅎ ㅘㄱ인
# print(a[1]) # 다른 예제로 확인
# print(b[1])

# # 리스트 복사 => [:]이용, copy 모듈 이용하기

# # [:] 이용
# a = [1, 2, 3]
# b = a[:]
# a[1] = 4
# print(a)
# print(b)

# # copy 모듈 이용
# from copy import copy
# a = [1, 2, 3]
# b = copy(a)
# print(b is a)

# # 튜플 
# a, b = ("python", "Life") # 괄호 생략 가능
# (a, b) = 'python', 'Life'
# print(a, b)

# # 리스트
# [a, b] = ['python', 'Life']
# print(a, b)

# # 여러 개 변수에 같은 값 대입하기
# a = b = 'python'

# # 파이썬에서 두 변수 값 바꾸기
# a = 3
# b = 5
# a, b = b, a
# print(a)
# print(b)

a = set(['a', 'b', 'c'])
print(a)
b = set([1, 2, 3, 'a'])
print(b)
print(a & b)
print(a.union(b))
print( a | b)
print(a-b), print(a.difference(b))
print(b-a), print(b.difference(a))