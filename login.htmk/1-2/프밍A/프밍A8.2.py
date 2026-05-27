def print_kwargs(**kwargs):
    print(kwargs)

print_kwargs(a=1)
print_kwargs(name = 'foo', age = 1) # 딕셔너리 형태로 출력 받는다.