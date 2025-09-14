# my_list = [1, 2, 4]

# print(my_list)

# # Comment

# # Many
# # comments

# print("Alice")  # Another comment
# print(10)       # This is inline comment

# def hello(name):
#     print("Hello,", name)
#     print("Hi,", name)


# hello('Alice')  # Call the hello function
# hello("Bob")

# def sum_nums(a, b):
#     sum = a + b
#     return sum
#     print('Line is not executed')


# first_num = sum_nums(5, 10)
# print(first_num)

# print(sum_nums(50.5, 20))

# print(sum_nums(sum_nums(50.5, 20), 30))


# print(10 + 5)  # 15
# print(print(10 + 5))  # 15 None
# input("Enter your name: ")  # str


# import datetime

# print(datetime.datetime.now())  # 2023-10-01 12:00:00.000000

# my_name = "Alice"
# print(id(my_name))  # e.g., 140123456789456

# my_number = 42
# print(id(my_number))  # e.g., 140123456789456

# other_number = my_number
# print(id(other_number))  # e.g., 140123456789456

# long_str = "This is a long string that spans multiple lines. \
# It is still considered a single string because of the backslash at the end of the line."
# print(long_str)
# print(type(long_str))
# print(id(long_str))

# my_comment = "This is my short comment"
# print(len(my_comment))
# print(my_comment.replace("short", "long"))
# print(my_comment)
# print(my_comment.count('is'))
# print(my_comment[-1])
# print(my_comment[2:7])

# input_str = input("Enter a string:    ")
# input_int = int(input("Enter an integer: "))

# print(input_str)
# print(type(input_str))

# print(input_int)
# print(type(input_int))

# complex_a = 10 + 7j
# complex_b = 3 + 3j
# print(complex_a + complex_b)

# (10 + 7j)(3 + 3j) = 30 + 30j + 21j - 21 = 30 + 51j

# db_is_available = False
# print(db_is_available)
# print(type(db_is_available))

# db_is_available = True
# print(db_is_available)

# print(bool(10))
# print(bool('abc'))
# print(bool([]))
# print(bool([1, 2]))
# print(bool({}))
# print(bool(None))

# print(100 > 10)
# print('Long string' > 'Short')
# print([] == [])
# print({'a': 3} == {'a': 5})

# print('a' + 3) # TypeError: can only concatenate str (not "int") to str

# int_num = 50
# float_num = 7.5
# print(int_num * float_num)  # 375.0
# print(int_num.__mul__(float_num))  # NotImplemented
# print(float_num.__rmul__(int_num))  # 375.0

# str_val = 'abc'
# print(str_val * int_num)  # abcabcabcabcabcabcabc...
# print(int_num.__mul__(str_val))  # NotImplemented
# print(str_val.__rmul__(int_num))  # abcabcabcabcabcabcabc...

# float_num = 50.5
# str_val = 'abc'
# print(float_num.__mul__(str_val))  # NotImplemented
# print(str_val.__rmul__(float_num))
# # TypeError: 'float' object cannot be interpreted as an integer

# print(bool.__doc__)
# Returns True when the argument is true, False otherwise.
# The builtins True and False are the only two instances of the class bool.
# The class bool is a subclass of the class int, and cannot be subclassed.

# print(str.__doc__)
# str(object='') -> str
# str(bytes_or_buffer[, encoding[, errors]]) -> str
# Create a new string object from the given object. If encoding or
# errors is specified, then the object must expose a data buffer
# that will be decoded using the given encoding and error handler.
# Otherwise, returns the result of object.__str__() (if defined)
# or repr(object).
# encoding defaults to 'utf-8'.
# errors defaults to 'strict'.

# my_list = []
# print(help(my_list.__eq__))
# Help on method-wrapper:
# __eq__(value, /) unbound builtins.list method
#     Return self==value.
# None

# my_nums = [10, 50, 0, 5, 100]
# print(dir(my_nums))
# ['__add__', '__class__', '__class_getitem__',
# '__contains__', '__delattr__', '__delitem__',
#  '__dir__', '__doc__', '__eq__', '__format__',
#  '__ge__', '__getattribute__', '__getitem__',
#  '__getstate__', '__gt__', '__hash__', '__iadd__',
#  '__imul__', '__init__', '__init_subclass__', '__iter__',
#  '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__',
#  '__reduce__', '__reduce_ex__', '__repr__', '__reversed__',
#  '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__',
#  '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend',
#  'index', 'insert', 'pop', 'remove', 'reverse', 'sort']

# res = my_nums.count(5)
# print(res)  # 1

# my_nums.append(500)
# print(my_nums)  # [10, 50, 0, 5, 100, 500]

# my_nums.insert(2, 25)
# print(my_nums)  # [10, 50, 25, 0, 5, 100, 500]

# my_nums.clear()
# print(my_nums)  # []

# my_nums.extend([1, 2, 3])
# print(my_nums)  # [1, 2, 3]

# my_nums.extend('abc')
# print(my_nums)  # [1, 2, 3, 'a', 'b', 'c']

# other_nums = my_nums
# print(id(my_nums))     # e.g., 140123456789456
# print(id(other_nums))  # e.g., 140123456789456

# other_nums = my_nums.copy()
# print(id(my_nums))     # e.g., 140123456789456
# print(id(other_nums))  # e.g., 140123456789789

# my_nums.append(3)
# other_nums.clear()
# print(id(my_nums))    # e.g., 140123456789456
# print(id(other_nums))  # e.g., 140123456789789

# print(my_nums, other_nums)  # [10, 50, 25, 0, 5, 100, 500, 3] []

# print(len(my_nums))  # 8

# 1. Создайте список с 5 элементами разных типов
# my_list = [42, "Python", 3.14, True, [1, 2, 3]]
# print("Original list:", my_list)  # [42, 'Python', 3.14, True, [1, 2, 3]]

# 2. Удалите третий элемент
# my_list.pop(2)  # Удаляем элемент с индексом 2 (третий элемент)
# print("After deletion:", my_list)  # [42, 'Python', True, [1, 2, 3]]

# 3. Выведите в терминал длину списка
# print("List length:", len(my_list))  # 4

# 4. Поменяйте порядок следования элементов в списке
# my_list.reverse()
# print("Reversed list:", my_list)  # [[1, 2, 3], True, 'Python', 42]

# # 5. Создайте еще один список с двумя элементами
# second_list = ["hello", 100]
# print("Second list:", second_list)  # ['hello', 100]

# # 6. Расширьте первый список элементами второго списка
# my_list.extend(second_list)
# print("Extended list:", my_list)
# # [[1, 2, 3], True, 'Python', 42, 'hello', 100]

# # 7. Выведите в терминал расширенный список из 6 элементов
# print("Final list with 6 elements:", my_list)
# # [[1, 2, 3], True, 'Python', 42, 'hello', 100]


# # 1. Создайте два списока
# first_list = [10, True, 'abc']
# second_list = [[1, 2], {'b': True}]
# print("First list:", first_list)  # [10, True, 'abc']
# print("Second list:", second_list)  # [[1, 2], {'b': True}]

# # 2. Объедините два списка, используя оператор +
# merged_list = first_list + second_list
# print("Combined using + operator:", merged_list)
# # [10, True, 'abc', [1, 2], {'b': True}]


# # 3. Определите, какой магический метод списков вызывается при использовании оператора +
# # При использовании оператора + для списков вызывается магический метод __add__
# print("Magic method called with + operator: __add__")  # __add__

# # 4. Выполните слияние списков, используя этот магический метод
# other_merged_list = first_list.__add__(second_list)

# # 5. Результат выведите в терминал
# # [10, True, 'abc', [1, 2], {'b': True}]
# print("Final combined list:", other_merged_list)


# my_motorbike = {
#     'brand': 'Honda',
#     'price ': 10000
# }

# print(my_motorbike['brand'])  # Honda
# print(dir(my_motorbike))
# ['__class__', '__contains__', '__delattr__', '__delitem__',
#  '__dir__', '__doc__', '__eq__', '__format__', '__ge__',
#  '__getattribute__', '__getitem__', '__getstate__', '__gt__',
#  '__hash__', '__init__', '__init_subclass__', '__iter__',
#  '__le__', '__lt__', '__ne__', '__new__', '__reduce__',
#  '__reduce_ex__', '__repr__', '__setattr__', '__setitem__',
#  '__sizeof__', '__str__', '__subclasshook__', 'clear', 'copy',
#  'fromkeys', 'get', 'items', 'keys', 'pop', 'popitem',
#  'setdefault', 'update', 'values']


my_dict = {}

print(my_dict.__doc__)
# dict() -> new empty dictionary
# dict(mapping) -> new dictionary initialized from a mapping object's
#     (key, value) pairs
# dict(iterable) -> new dictionary initialized as if via:
#     d = {}
#     for k, v in iterable:
#         d[k] = v
# dict(**kwargs) -> new dictionary initialized with the name=value pairs
#     in the keyword argument list.  For example:  dict(one=1, two=2)
