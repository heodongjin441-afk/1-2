# 리스트랑 람바 필터 
a = list(filter(lambda a : a%2==0, [0,1,2,3,4,5,]))
print(a)

# 람다

name = lambda hdj : print("내 이름은 %s이고" % hdj)
age = lambda hdjage : print("나이는 %d 살이다" % hdjage)
name("heodongjin")
age(17)
print(name, age)

# 필터, sorted

b = sorted([1016, 1, 301403, 6, 10])
print(b)
c = list(sorted(filter(lambda c : c % 2 == 0, [0, 15, 19, 20, 40])))
print(c)