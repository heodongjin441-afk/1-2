a = "You need Python"
print(len(a))
a = "LIfe is too short, You need Python"
print(a[0:])
a = "20230331Rainy"
print(a[0:8])
print(a)
print("I eat %d apples." % 3)
print("I eat %s APPLES." % "five")
number = 3
print("I eat %d apples." % number)
number = 10
day = "three"
print("I ate %d apples. so I was sick for %s days." % (number, day))
print("I have %s apples." % 3)
print("rate is %s." % 3.234)
print("Error is %d%%." % 98)
print("%10s" % "Hello")
print("%-10s" % "Hello")
print("%0.4f" % 3.42134234)
print("%10.4f" % 3.42134234)
print("I eat {0} apples.". format(3))
print("I eat {0} apples.". format("five"))
number = 10
day = "three"
print("I ate {0} apples. so I was sick for {1} days.". format(number, day))
print("{0:=^10}".format("hi"))
print("{{and}}".format())
name = "허동진"
age = 17
print(f"나의 이름은{name}이고 나이는 {age}입니다.")
age = 17
print(f"나는 내년이면 {age + 1}살이 된다.")
print("{0:!^12}".format("python"))
print(",".join('abcd'))
a = "hello"
print(a.upper())
a = "HELLO"
print(a.lower())
e = [1, 2, ['Life', 'is']]
print(e)
a = [1, 2, 5, 6]
print(a[0]+a[3])
b = [4, 5, 9, 90]
print(b[0] + b[3])
print(b[0:4])
c = [1, 2, 3, ['a', 'b', 'c']]
print(c[-1])
print(c[-1][0])
d = [1, 2, 3, 4, 5]
print(d[:5]), print(d[1:3])
print(d*9)
print(a+b+c+d)
print(len(a))
f = [5, 1, 6]
f[0] = 1
print(f)
del f[1:]
f.append(-1)
print(f)
f.sort()
print(f)
g = [4, 2, 1, -1]
g.reverse()
print(g)
print(g.index(1))
g.insert(3, 15)
print(g)
g.remove(1)
print(g)
g.remove(15)
print(g)
g.pop(2)
print(g)
print(g.count(-1))
g.extend([1, 7, 5])
print(g)
t1 = (1, 5, 6, 'a') 
print(t1)
print(t1[:3])
t2 = (5, 'b')
t3 = t1 + t2
print(t3)
print(len(t1))
print(a+b)