#1
P, M = map(int, input().split())
print(M - P)
#2
N = list(map(int, input().split()))
for i in N:
    if i > 0:
        print(i)
    else:
        None
#3
N = int(input())
while True:
    if N >= 0:
        print(N)
        N -= 1
    elif N < 0:
        break
#4
N = list(map(int, input().split()))
count = 0
while True:
    if count <= len(N):
        N.reverse()
        count += 1
        print("%d회 회전했다" % count)
    elif count > len(N):
        None

#5
N = list(map(int, input().split()))
coutn = 0
for i in N:
    if i % 2 == 0:
        count += N[i]
    elif i % 2 != 0:
        count += N[i]

#6
N = list(map(int, input().split()))
K = list(map(int, input().split()))
M = N + K
print(max(M))