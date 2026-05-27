# key = 주체가 됨, key값을 가지고 있는게 Value
# 딕셔너리 쌍 추가
# dic = {'name': 'pey', 'phone' : '010=9999-1234', 'birth' : '1188'}
# a = {1: 'hi'}
# a[2] = 'b'



# # 딕셔너리 요소 삭제는 del 함수 사용
# # ex) del a[1] -> Key가 1인 Key:Value 쌍 삭제
# del a[1]
# print(a)
# # 딕셔너리에서 Key를 사용해 Value값 얻기
# grade = {'pey' : 10, 'juliet' : 99}
# grade['pey']
# grade['juliet']
# print(grade['juliet'])
# print(grade['pey'])
# # 딕셔너리를 만들 때 주의 사항 : 딕셔너리에는 동일한 Key가 중복으로 존재할 수 없음
# # a = {1 : 'a', 1:'b'} -> 1이라는 Key값이 중복으로 사용됨
# # >>> a
# # {1 : 'b'} 이 출력되며 1 : 'a'쌍이 무시됨
# # Key 리스트 만들기
# a = {'name' : 'pey', 'phone' : '010-9999-1234', 'birth' : '1118'}
# print(a.keys())
# # dict_keys 객체를 리스트로 변환하는 방법 => list(a.keys())
# # ['name', 'phone', 'birth']가 출력된다.
# print(list(a.keys()))
# # Value 리스트 만들기 
# print(a.values()) # values값을 출력함
# print(list(a.values())) # values값만 모아서  출력 (dict_values칸이 출력되지 않음)
# # key,value값 쌍으로 같이 얻기 => items
# a.items
# print(a.items())
# print(list(a.items()))
# # a.key(), a.values(), a.items()
# # key와 value쌍 모두 지우기 - clear = 딕셔너리 내의 모든 요소 삭제, 빈 딕셔너리는()로 표현
# print(a.clear())
# # 해당 Key가 딕셔너리에 있는지 조사하는 명령어 = 'Key' in a
# a = {'name' : 'pey', 'phone' : '010-9999-1234', 'birth' : '1118'}
# print('name' in a)
# print('email' in a)
# # Key로 Value 얻기 - get = Key에 대응되는 Value 리턴, 존재하지 않는 키 사용시 None 리턴(list는 오류를 발생시킴)
# print(a.get('name'))
# print(a.get('phone'))
# # a.['nokey'] = 오류, a.get('noeky') = None, a.get('nokey', 'foo') = 'foo'를 출력한다
# print(a.get('nokey', 'foo'))

a = {'name' : '허동진', "phone" : "010-7675-0829", "birth" : "2010-01-16"}
print(a['name'])
print(a.keys())
print(a.values())
print(a.items())
print(a.get('name'))
print(a.clear())

