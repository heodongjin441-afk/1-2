def rank(name, score = 100):
    print("이름 : %s" % name)
    print("점수 : %d" % score)
    return name

result = rank("허동진")
print(result)


# def vartest(a):
#     a = a + 1

# vartest(3)
# print(a)

x = 10

def fun():
    print(x)

fun()

# global 함수 안에서 전역 변수를 수정 할 때 사용한다
x = 10
def fun():
    global x
    x = x + 1

fun()
print(x)

# return을 사용하면 전역변수를 함수 안에서 접근해서 변경 가능하다.
a = 1
def vartest(a):
    a = a + 1
    return a
a = vartest(a)
print(a)

# global 함수를 써서 함수 안에서도 전역 변수를 변경가능하게 해놓았다
a = 1
def vartest():
    global a
    a = a + 1

vartest()
print(a)

# lambda 예악어는 함수를 간단하게 만들 때 사용되는 키워드입니다.
# def와 동일한 기능이지만 더 짧게 사용할수있습니다.
# 간단한 연사에 주로 사용됩니다.

def add(a, b):
    return a + b
print(add(3, 4))
# def와 lambda를 비교하였다!
add = lambda a, b: a + b
print(add(3, 4))