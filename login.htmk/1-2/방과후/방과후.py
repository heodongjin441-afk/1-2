a, b, c = map(int, input().split())
print((a+b)%c)
print(((a%c)+(b%c))%c)
print((a*b)%c)
print(((a%c)*(b%c))%c)






a = int(input())
if a >= 90:
    print("A")
elif a>= 80:
    print("B")
elif a >= 70:
    print("C")
elif a >= 60:
    print("D")
else:
    print("F")


a = int(input())
b = int(input())
if a > 0:
    if b > 0:
        print(1)
    else:
        print(4)
else:
    if b > 0:
        print(2)
    else:
        print(3)





a = int(input())
if a >= 0 and a <= 4000:
    a % 4 == 0 or a % 400 == 0
    print(1)
elif a % 100 ==0:
    print(2)