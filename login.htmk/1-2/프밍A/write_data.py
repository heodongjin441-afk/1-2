f = open("/Users/heodongjin/1-2/login.htmk/1-2/프밍A/새파일.txt", "w")

for i in range(1, 11):
    data = f"{i}번째 줄입니다.\n"
    f.write(data) # data를 새파일.txt에 쓰기


f.close()