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
