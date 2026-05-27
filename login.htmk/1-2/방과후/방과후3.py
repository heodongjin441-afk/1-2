# 1.
W, H = map(int, input().split())
print(W*H)

# 2.
score = int(input())
if score >= 60:
    print("합격")
else:
    print("불합격")

# 3.
N, M = map(int, input().split())
count = 0
while 1 <= M <= N:
  if N / M == 0:
    count += 1
    print(count)

# 4.

# 5.
N = int(input())
if N / 1 == 0 and N / N == 0:
  print("소수")
else:
    print("소수 아님")

# 6.
N = list(map(int, input().split()))
for i in range(1, N+1):
   if i < N:
    print(i)