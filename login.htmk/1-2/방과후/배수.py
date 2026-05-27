a = int(input())
result = "4의 배수도 5의 배수도 아니다"
if a % 4 == 0:
    print("4의 배수입니다")
elif a % 5 == 0:
    print("5의 배수입니다")
else:
    print(result)