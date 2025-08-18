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

def sum_nums(a, b):
    sum = a + b
    return sum


first_num = sum_nums(5, 10)
print(first_num)

print(sum_nums(50.5, 20))

print(sum_nums(sum_nums(50.5, 20), 30))
