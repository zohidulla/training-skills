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


# my_dict = {}
# print(my_dict.__doc__)
# dict() -> new empty dictionary
# dict(mapping) -> new dictionary initialized from a mapping object's
#     (key, value) pairs
# dict(iterable) -> new dictionary initialized as if via:
#     d = {}
#     for k, v in iterable:
#         d[k] = v
# dict(**kwargs) -> new dictionary initialized with the name=value pairs
#     in the keyword argument list.  For example:  dict(one=1, two=2)

# my_disk = {}
# print(id(my_disk))  # e.g., 140123456789456
# print(type(my_disk))  # <class 'dict'>
# my_disk['brand'] = 'Seagate'
# my_disk['capacity'] = 2000  # in GB
# my_disk['price'] = 75.5  # in USD
# print(my_disk)  # {'brand': 'Seagate', 'capacity': 2000, 'price': 75.5}
# print(id(my_disk))  # e.g., 140123456789456
# print(my_disk.__dir__())
# ['__new__', '__repr__', '__hash__', '__getattribute__', '__lt__', '__le__',
#  '__eq__', '__ne__', '__gt__', '__ge__', '__iter__', '__init__', '__or__',
#  '__ror__', '__ior__', '__len__', '__getitem__', '__setitem__', '__delitem__',
#  '__contains__', '__sizeof__', 'get', 'setdefault', 'pop', 'popitem', 'keys',
#  'items', 'values', 'update', 'fromkeys', 'clear', 'copy', '__reversed__',
#  '__class_getitem__', '__doc__', '__str__', '__setattr__', '__delattr__',
#  '__reduce_ex__', '__reduce__', '__getstate__', '__subclasshook__',
#  '__init_subclass__', '__format__', '__dir__', '__class__']
# print(my_disk.items())
# dict_items([('brand', 'Seagate'), ('capacity', 2000), ('price', 75.5)])
# print(type(my_disk.items()))  # <class 'dict_items'>
# print(my_disk.keys())
# dict_keys(['brand', 'capacity', 'price'])
# print(type(my_disk.keys()))  # <class 'dict_keys'>
# print(list(my_disk.keys()))  # ['brand', 'capacity', 'price']
# print(my_disk.get('hdd'))  # None
# new_disk = my_disk.copy()
# new_disk['type'] = 'ssd'
# {'brand': 'Seagate', 'capacity': 2000, 'price': 75.5, 'type': 'ssd'}
# print(new_disk)

# my_list = [0, True, 'abc']
# my_list = [['first', 0], ['second', True]]
# my_dict = dict(my_list)
# print(my_dict)  # {0: True, 1: 'abc'}
# print(my_dict)  # {'first': 0, 'second': True}

# my_str = 'abc'
# my_dict = dict(my_str)
# print(my_dict)
# Traceback (most recent call last):
#   File "main.py", line 311, in <module>
#     my_dict = dict(my_str)
# ValueError: dictionary update sequence element #0 has length 1; 2 is required

# Задача
# 1. Создайте пустой словарь
# 2. Трижды попросите пользователя сначала ввести название ключа, а потом ввести значение для этого ключа. Всего должно быть 6 запросов на ввод текста.
# 3. Во время получения данных от пользователя добавляйте в словарь ключи с значениями согласно тому, что ввел пользователь.
# 4. Выведите результирующий словарь в терминал

# my_dict = {}

# for i in range(3):

#     key = input(f"Enter key name #{i+1}: ")
#     value = input(f"Enter value for key '{key}': ")

#     my_dict[key] = value

# print(my_dict)


# my_nums = (10, 5, 100, 0, 5, 5)

# print(type(my_nums))  # <class 'tuple'>

# my_nums[1] = 7
# Traceback (most recent call last):
#   File "main.py", line 341, in <module>
#     my_nums[1] = 7
#     ~~~~~~~^^^
# TypeError: 'tuple' object does not support item assignment

# del my_nums[1]
# Traceback (most recent call last):
#   File "main.py", line 348, in <module>
#     del my_nums[1]
#         ~~~~~~~^^^
# TypeError: 'tuple' object doesn't support item deletion

# print(my_nums.count(5))  # 3
# print(my_nums.index(5))  # 1

# index_first = my_nums.index(5)
# index_second = my_nums.index(5, index_first + 1)
# print(index_second)  # 4

# index_third = my_nums.index(5, index_second + 1)
# print(index_third)  # 5


# my_list = list(my_nums)
# my_list.append(7)

# print(my_list)  # [10, 5, 100, 0, 5, 5, 7]
# print(my_nums)  # (10, 5, 100, 0, 5, 5)

# my_nums = tuple(my_list)
# print(my_nums)  # (10, 5, 100, 0, 5, 5, 7)

# my_tuple = tuple('abcd')
# print(my_tuple)  # ('a', 'b', 'c', 'd')

# my_tuple = tuple({'first': 'a', 'second': 'b', 'third': 'c', 'fourth': 'd'})
# print(my_tuple)  # ('first', 'second', 'third', 'fourth')

# posts_ids = {10, 25, 16, 73}
# posts_ids[0]
# Traceback (most recent call last):
#   File "main.py", line 382, in <module>
#     posts_ids[0]
#     ~~~~~~~~~^^^
# TypeError: 'set' object is not subscriptable

# posts_ids = [10, 25, 16, 73]
# print(posts_ids.__getitem__(0))  # 10
# print(posts_ids[0])  # 10

# my_set = {10, 10, 5, 15, 15}
# print(my_set)  # {10, 5, 15}
# print(len(my_set))  # 3

# del my_set[0]  # TypeError: 'set' object doesn't support item deletion


# my_set = {[10, 10], 5, 15, 15}
# print(my_set)  # TypeError: unhashable type: 'list'

# my_set = {(10, 10), 5, 15, 15}
# print(my_set) # {(10, 10), 5, 15}


# my_set = {{}, 5, 15, 15}
# print(my_set)  # TypeError: unhashable type: 'dict'

# my_set = {}
# print(my_set)  # {}
# print(type(my_set))  # <class 'dict'>

# my_set = set()
# print(my_set)  # set()
# print(type(my_set))  # <class 'set'>

# my_set = {'abc', 'd', 'f', 'y'}
# other_set = {'a', 'f', 'd'}

# print(my_set.intersection(other_set))  # {'d', 'f'}
# print(other_set.intersection(my_set))  # {'d', 'f'}
# print(my_set & other_set)  # {'d', 'f'}
# print(my_set.intersection('abcd'))  # {'d'}
# print(my_set.intersection('abc'))  # set()
# print(my_set.intersection(['a', 'b', 'c', 'd']))  # {'d'}
# print(my_set.intersection(('a', 'b', 'c', 'd')))  # {'d'}

# print(my_set.union(other_set))  # {'abc', 'y', 'd', 'f', 'a'}

# print(other_set.issubset(my_set))  # False

# print(my_set.issuperset(other_set))  # False
# print(my_set == other_set)  # False

# print(my_set.difference(other_set))  # {'abc', 'y'}
# print(my_set - other_set)  # {'abc', 'y'}

# print(my_set | other_set)  # {'abc', 'y', 'd', 'f', 'a'}

# my_set.discard('d')
# print(my_set)  # {'abc', 'y', 'f'}

# my_set.remove('abc')
# print(my_set)  # {'y', 'd', 'f'}

# copied_set = my_set.copy()
# my_set.add('t')
# copied_set.add('l')
# print(copied_set)  # {'abc', 'y', 'd', 'f', 'l'}
# print(my_set)  # {'abc', 'y', 'd', 'f', 't'}
# print(my_set & copied_set)  # {'abc', 'y', 'd', 'f'}

# print(my_set.symmetric_difference(copied_set))  # {'l', 't'}

# a = {'abc', 'd', 'f', 'y'}
# b = {'abc', 'd', 'f', 'l'}

# print((a | b) - (a & b))  # {'y', 'l'}
# print(a.symmetric_difference(b))  # {'y', 'l'}

# Задача
# 1. Создайте набор с несколькиx элементов типа int
# 2. Добавьте в него еще один элемент
# 3. Создайте еще один набор с несколькими элементами, причем некоторые должны быть такими же как в первом наборе
# 4. Найдите общие элементы в двух наборах и поместите их в новый набор
# 5. Конвертируйте результирующий набор в список и выведите список  в терминал

# set_one = {10, 5, 7, 15, 100}
# set_one.add(200)

# set_two = {20, 7, 300, 100, 200}

# set_common = set_one.intersection(set_two)
# print(set_common)  # {200, 100, 7}

# list_common = list(set_common)
# print(list_common)  # [200, 100, 7]

# print(set_one)  # {100, 5, 7, 10, 200, 15}
# print(set_two)  # {200, 100, 20, 7, 300}


# my_range = range(5)
# print(my_range)  # range(0, 5)
# print(type(my_range))  # <class 'range'>
# print(my_range[0])  # 0
# print(my_range[-1])  # 4

# for n in my_range:
#     print(n)

# for n in range(12, 25, 5):
#     print(n)
# 12
# 17
# 22

# print(list(range(12, 25, 5)))  # [12, 17, 22]
# print(tuple(range(12, 25, 5)))  # (12, 17, 22)
# print(set(range(12, 25, 5)))  # {17, 22, 12}

# print(dict(range(12, 25, 5)))
# Traceback (most recent call last):
#   File "main.py", line 502, in <module>
#     print(dict(range(12, 25, 5)))
#           ~~~~^^^^^^^^^^^^^^^^^^
# TypeError: cannot convert dictionary update sequence element #0 to a sequence

# my_range = range(5)
# print(dir(my_range))
# ['__bool__', '__class__', '__contains__', '__delattr__',
#  '__dir__', '__doc__', '__eq__', '__format__', '__ge__',
#  '__getattribute__', '__getitem__', '__getstate__', '__gt__',
#  '__hash__', '__init__', '__init_subclass__', '__iter__', '__le__',
#  '__len__', '__lt__', '__ne__', '__new__', '__reduce__', '__reduce_ex__',
#  '__repr__', '__reversed__', '__setattr__', '__sizeof__', '__str__',
#  '__subclasshook__', 'count', 'index', 'start', 'step', 'stop']

# my_range = range(10, 30, 3)
# print(my_range.start)  # 10
# print(my_range.stop)   # 30
# print(my_range.step)   # 3
# print(my_range.index(13))  # 1

# print(my_range.index(20))
# Traceback (most recent call last):
#   File "main.py", line 526, in <module>
#     print(my_range.index(20))  # 4
#           ~~~~~~~~~~~~~~^^^^
# ValueError: 20 is not in range

# print(my_range.count(3))  # 0
# print(my_range.count(10))  # 1

# fruits = ['apple', 'banana', 'lime', 'orange']

# quantities = [100, 70, 50, 20]
# quantities = {100, 70, 50, 20}
# quantities = '1234'

# availability = [True, False, False, True]
# availability = (True, False, False, True)

# fruit_qtys_zip = zip(fruits, quantities, availability)
# print(fruit_qtys_zip)  # <zip object at 0x7f9c8c0c8c80>

# print(type(fruit_qtys_zip))  # <class 'zip'>

# fruit_qtys_list = list(fruit_qtys_zip)
# print(fruit_qtys_list)
# [('apple', 100, True), ('banana', 70, False), ('lime', 50, False), ('orange', 20, True)]
# [('apple', '1', True), ('banana', '2', False), ('lime', '3', False), ('orange', '4', True)]

# fruit_qtys_dict = dict(fruit_qtys_zip)
# print(fruit_qtys_dict)
# Traceback (most recent call last):
#   File "main.py", line 555, in <module>
#     fruit_qtys_dict = dict(fruit_qtys_zip)
# ValueError: dictionary update sequence element #0 has length 3; 2 is required

# fruit_qtys_zip = zip(quantities, availability)
# fruit_qtys_dict = dict(fruit_qtys_zip)
# print(fruit_qtys_dict)
# # {100: True, 70: False, 50: False, 20: True}

# from copy import deepcopy

# info = {
#     'user_id': 831,
#     'user_name': 'Alice',
#     'reviews': []
# }

# info_copy = deepcopy(info)

# info_copy['reviews'].append('Great product!')
# info_copy['reviews'].append('Will buy again!')
# info['reviews'].append('Not good')

# print(info)  # {'user_id': 831, 'user_name': 'Alice', 'reviews': ['Not good']}
# print(info_copy)
# # {'user_id': 831, 'user_name': 'Alice', 'reviews': ['Great product!', 'Will buy again!']}

# info = {
#     'user_id': 831,
#     'user_name': 'Alice',
#     'reviews': []
# }

# info_copy = info.copy()

# info_copy['reviews'].append('Great product!')
# info['reviews'].append('Not good')

# print(info)
# # {'user_id': 831, 'user_name': 'Alice', 'reviews': ['Great product!', 'Not good']}
# print(info_copy)
# # {'user_id': 831, 'user_name': 'Alice', 'reviews': ['Great product!', 'Not good']}

# info = {
#     'user_id': 831,
#     'user_name': 'Alice',
#     'reviews': []
# }

# info_shallow_copy = info.copy()

# info_shallow_copy['reviews'].append('Great product!')
# info['reviews'].append('Not good')
# info['new_key'] = 10

# print(info)
# # {'user_id': 831, 'user_name': 'Alice', 'reviews': ['Great product!', 'Not good'], 'new_key': 10}
# print(info_shallow_copy)
# # {'user_id': 831, 'user_name': 'Alice', 'reviews': ['Great product!', 'Not good']}

# def increase_person_age(person):
#     print(id(person))  # e.g., 140123456789456
#     person['age'] += 1
#     return person


# person_one = {
#     'name': 'Alice',
#     'age': 21
# }
# print(id(person_one))  # e.g., 140123456789456

# increase_person_age(person_one)
# print(person_one['age'])  # 22

# Задача
# 1. Создайте функцию merge_lists_to_dict
# 2. У функция должна быть два параметра
# 3. Функция должна объединять два списка, используя встроенную функцию zip
# 4. Конвертируйте объект zip в словарь и верните его из функции
# 5. Вызовите функцию, передав ей два списка в качестве аргументов
# 6. Выведите результат вызова функции в терминал

# def merge_lists_to_dict(list_one, list_two):
#     return dict(zip(list_one, list_two))


# res_one = merge_lists_to_dict(['a', 'b', 'c'], [10, True, []])
# print(res_one)  # {'a': 10, 'b': True, 'c': []}

# res_two = merge_lists_to_dict(['abc'], [{}, True, 100])
# print(res_two)  # {'abc': {}}

# res_three = merge_lists_to_dict([{}, True, 100], ['abc'])
# print(res_three)  # TypeError: unhashable type: 'dict'

# def sum_nums(*args):
# print(args)  # (10, 5, 3, 8)
# print(type(args))  # <class 'tuple'>
# print(args[0])  # 10
# return sum(args)


# print(sum_nums(10, 5, 3, 8))  # 26
# print(sum_nums())  # 0

# Позиционные аргументы
# def get_posts_info(name, posts_qty):
#     info = f"{name} wrote {posts_qty} posts"
#     return info


# print(get_posts_info("Alice", 5))  # Alice wrote 5 posts

# # Именованные аргументы
# def get_posts_info(**person):
#     print(person)  # {'posts_qty': 30, 'name': 'Alice', 'id': 831}
#     info = (
#         f"{person['name']} wrote "
#         f"{person['posts_qty']} posts"
#     )
#     return info


# print(get_posts_info(posts_qty=30, name='Alice', id=831))
# # Alice wrote 30 posts

# ЗАДАЧА 1
# 1. Перепишите вызов функции merge_lists_to_dict из предыдущей задачи так,
#  чтобы в нём использовались аргументы с ключевыми словами.
# 2. Добавьте ещё один вызов функции, в котором будет один позиционный аргумент,
# а второй - аргумент с ключевым словом.

# def merge_lists_to_dict(list_one, list_two):
#     return dict(zip(list_one, list_two))


# result_one = merge_lists_to_dict(
#     list_one=['a', 'b', 'c'], list_two=[10, True, []])
# print(result_one)  # {'a': 10, 'b': True, 'c': []}

# result_two = merge_lists_to_dict(list_two=[{}, True, 100], list_one=['abc'])
# print(result_two)  # {'abc': {}}

# result_three = merge_lists_to_dict(
#     ['a', True, 100], list_two=['abc'])
# print(result_three)  # {'a': 'abc'}

# result_three = merge_lists_to_dict(
#     list_two=['abc'], ['a', True, 100])
# SyntaxError: positional argument follows keyword argument


# ЗАДАЧА 2
# 1. Создайте функцию update_car_info, в которой все именованные аргументы
#  будут объединяться в словарь car.
# 2. Добавьте в словарь новый ключ is_available со значением True.
# 3. Верните из функции изменённый словарь.
# 4. Вызовите функцию с именованными аргументами brand и price, их значения могут быть любыми.

# def update_car_info(**car):
#     car['is_available'] = True
#     return car


# print(update_car_info(brand='Toyota', price=250000))
# {'brand': 'Toyota', 'price': 250000, 'is_available': True}

# print(update_car_info('Toyota', 250000))
# TypeError: update_car_info() takes 0 positional arguments but 2 were given

# print(update_car_info(
# brand='Honda', price=300000, color='blue', year=2023))
# {'brand': 'Honda', 'price': 300000, 'color': 'blue', 'year': 2023, 'is_available': True}

# # Значения параметров функции по умолчанию
# from datetime import date


# def get_weekday():
#     return date.today().strftime('%A')
#     # return date.today().strftime('%c')  # Wed Oct 22 00:00:00 2025
#     # return date.today().strftime('%x')  # 10/22/25


# def create_new_post(post, weekday=get_weekday()):
#     post_copy = post.copy()
#     post_copy['created_on_weekday'] = weekday
#     return post_copy


# initial_post = {
#     'id': 243,
#     'author': 'Alice',
# }

# post_with_weekday = create_new_post(initial_post)
# print(post_with_weekday)
# # {'id': 243, 'author': 'Alice', 'created_on_weekday': 'Wednesday'}
# print(initial_post)
# # {'id': 243, 'author': 'Alice'}

# Колбэк функции
# def print_number_info(num):
#     if num % 2 == 0:
#         print(f"{num} is even")
#     else:
#         print(f"{num} is odd")


# def print_square_num(num):
#     print(f"The square of {num} is {num * num}")


# def process_number(number, callback_fn):
#     callback_fn(number)


# entered_number = int(input("Enter any number: "))

# process_number(entered_number, print_number_info)
# process_number(entered_number, print_square_num)


# def send_data(data):
#     # sending data to the remote server
#     pass


# def process_data(input_data, send_data_fn):
#     updated_data = input_data.copy()
#     # actions with updated_data
#     send_data_fn(updated_data)


# process_data({'name': 'Alice'}, send_data)

# # Документация функции (docstring)
# def print_number_info(num):
#     """
#     Prints num information

#     Args:
#         num (int): Integer number

#     Returns:
#         int: Same number
#     """
#     if num % 2 == 0:
#         print(f"{num} is even")
#     else:
#         print(f"{num} is odd")

#     return num


# print_number_info(10)

# # Практика - Глобальные и локальные переменные
# c = 5


# def my_fn(a, b):
#     d = 10
#     print(c)  # 5
#     print(a, b)  # abc xyz # 3 5
#     # print(dir())  # ['a', 'b', 'd']


# # my_fn('abc', 'xyz')
# my_fn(3, 5)
# # print(a)  # NameError: name 'a' is not defined
# # print(dir())  # ['__annotations__', '__builtins__', '__cached__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', 'c', 'my_fn']


# print(dir(list))
# ['__add__', '__class__', '__class_getitem__', '__contains__', '__delattr__', '__delitem__', '__dir__', '__doc__', '__eq__', '__format__', '__ge__', '__getattribute__', '__getitem__', '__getstate__', '__gt__', '__hash__', '__iadd__', '__imul__', '__init__', '__init_subclass__', '__iter__', '__le__', '__len__', '__lt__', '__mul__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', '__reversed__', '__rmul__', '__setattr__', '__setitem__', '__sizeof__', '__str__', '__subclasshook__', 'append', 'clear', 'copy', 'count', 'extend', 'index', 'insert', 'pop', 'remove', 'reverse', 'sort']
