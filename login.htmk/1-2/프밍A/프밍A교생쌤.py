class fourcal:
    """
    def setdata(self, first, second):
        self.first = first
        self.second = second
    """
    def __init__(self, first, second):
        self.first = first
        self.second = second

    def add(self):
        result = self.first + self.second
        return result
    
    def mul (self):
        result = self.first * self.second
        return result
    
    def sub(self):
        result = self.first - self.second
        return result
    
    def div(self):
        result = self.first / self.second
        return result

a = fourcal(3, 7)
b = fourcal(8, 2)
print(a.add(), a.mul(), a.div(), a.sub())
print(b.add(), b.mul(), b.div(), b.sub())