f = open("/Users/heodongjin/1-2/login.htmk/1-2/프밍A/새파일.txt", "r")

while True:
    line = f.readline()
    if not line:
        break
    print(line, end="")

f.close