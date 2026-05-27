f = open("/Users/heodongjin/1-2/login.htmk/1-2/프밍A/새파일.txt", "r")

lines = f.readlines()

for line in lines:
    print(line, end="")
f.close()