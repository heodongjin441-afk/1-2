month = int(input())
if month >= 3 and month <= 5:
    print("3월~ 5월까지는 봄입니다")
if month >= 6 and month <= 8:
    print("6월~8월은 여름입니다")
if month >= 9 and month <= 11:
    print("9월에서 11월까지는 가을입니다")
if month == 1 or month == 2 or month == 12:
    print("12월~2월은 겨울입니다")