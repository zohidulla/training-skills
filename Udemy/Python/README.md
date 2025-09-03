# Python

### Самое важное в Python - Объекты

**Python** - это объектно-ориентированный язык программирования, что означает, что все в Python является объектом. Это включает в себя не только данные, но и функции и классы. Объекты имеют свойства (атрибуты) и методы (функции), которые могут быть вызваны для выполнения действий с объектом.

### Главная идея в Python - все сущности в Python - объекты.

### Объект - это экземпляр класса, который содержит данные и методы для работы с этими данными.

### Классы в Python определяют структуру и поведение объектов.

### Класс - это шаблон или прототип для создания объектов.

### На основе класса можно создавать множество объектов, каждый из которых будет иметь свои собственные данные, но общие методы и свойства.

### У каждого объекта есть атрибуты.

### Атрибут объекта называется методом, если его значение - функция.

## Основные типы в Python - Basic Types in Python

### В Python есть несколько основных типов данных:

- **str** - строки, например: "Hello", "World"
- **int** - целые числа, например: 1, 2, 3
- **bool** - логические значения, True или False
- **list** - упорядоченный изменяемый список, например: [1, 2, 3]
- **dict** - неупорядоченный изменяемый словарь, например: {"key": "value"} {"min": 1, "max": 10}
- **tuple** - упорядоченный неизменяемый список, например: (1, 2, 3)
- **float** - числа с плавающей запятой, например: 1.5, 2.0, 3.14
- **set** - неупорядоченное множество, например: {1, 2, 3}

## Встроенные функции - Built-in Functions

В Python есть множество встроенных функций, которые можно использовать для выполнения различных задач. Вот некоторые из них:

- **print()** - выводит данные на экран
- **len()** - возвращает длину объекта
- **type()** - возвращает тип объекта
- **int()** - преобразует объект в целое число
- **float()** - преобразует объект в число с плавающей запятой
- **str()** - преобразует объект в строку
- **list()** - преобразует объект в список
- **dict()** - преобразует объект в словарь
- **set()** - преобразует объект в множество
- **tuple()** - преобразует объект в кортеж
- **sum()** - возвращает сумму элементов в итерируемом объекте
- **max()** - возвращает максимальное значение в итерируемом объекте
- **min()** - возвращает минимальное значение в итерируемом объекте
- **input()** - считывает данные с клавиатуры

Функции могут принимать аргументы и возвращать значения. Они могут быть вызваны с помощью круглых скобок, например: `print("Hello, World!")`.

Функции могут быть определены с помощью ключевого слова `def`, например:

```python
def greet(name):
    return f"Hello, {name}!"

print(greet("Alice"))  # Вывод: Hello, Alice!
```

Встроенная функция `input()` позволяет считывать данные с клавиатуры. Она возвращает введенную строку:

```python
name = input("Введите ваше имя: ")

print(f"Привет, {name}!")
# <Name your entered> - Значения типа str
```

## Функция dir и атрибуты объектов - dir() and Object Attributes

Функция `dir()` возвращает список атрибутов и методов объекта. Это полезно для изучения объектов и их возможностей. Например:

```python
my_list = [1, 2, 3]
print(dir(my_list))
```

Вывод будет содержать все методы, доступные для списков, такие как `append()`, `remove()`, и т.д.

Атрибуты объекта - это переменные, которые хранят данные, связанные с объектом. Их можно получить с помощью точечной нотации:

Примеры получения списка атрибутов объекта.

```python
>>> x = 5
>>> dir()
['__annotations__', '__builtins__', '__doc__', '__loader__',
'__name__', '__package__', '__spec__', 'x']
>>> import struct
>>> dir()
['__annotations__', '__builtins__', '__doc__', '__loader__',
'__name__', '__package__', '__spec__', 'struct', 'x']

>>> dir(struct)
['Struct', '__all__', '__builtins__', '__cached__', '__doc__',
'__file__', '__loader__', '__name__', '__package__', '__spec__',
'_clearcache', 'calcsize', 'error', 'iter_unpack', 'pack', 'pack_into',
'unpack', 'unpack_from']
>>> class Shape:
...     def __dir__(self):
...         return ['area', 'perimeter', 'location']
>>> s = Shape()
>>> dir(s)
['area', 'location', 'perimeter']
```

Встроенная функция `dir()` позволяет увидеть все атрибуты и методы объекта, включая те, которые были определены в классе:

```python
print(dir(person))
# Выводит список атрибутов и методов объекта person
```

Атрибуты объекта доступны через точечную нотацию, например: `person.name` или `person.age`. Методы объекта также вызываются с помощью точечной нотации, например: `person.greet()`.

```python
name = 'Alice'

print(name.upper())  # Вывод: ALICE метод атрибута upper() является функцией, которая возвращает строку в верхнем регистре.
```

# Форматирование кода и PEP8 - Formatting Code and PEP8

## Отступы в Python - Indentation in Python

Отступы играют важную роль в Python, так как они определяют блоки кода. В Python используется 4 пробела для отступов. Отступы помогают структурировать код и делают его более читаемым.

Отступы

```python
# Корректный код
def print_name_function(name):
    print(name)
```

```python
# Некорректный код
def print_name_function(name):
print(name)
```

**PEP8** - это руководство по стилю кода в Python, которое рекомендует использовать 4 пробела для отступов. Это позволяет избежать ошибок и сделать код более понятным.
**PEP8** рекомендует использовать 4 пробела для отступов. Это позволяет избежать ошибок и сделать код более понятным.

**Некоторые выдержки из PEP8:**

1. Для отступов использовать **пробелы**, а не **Tab**. Используйте **4 пробела** для каждого уровня отступа.
2. Длина строк должна быть не более **79 символов**.
3. **Функции и классы** должны быть отделены от других строк кода **двумя пустыми строками.**
4. Импорты модулей должны быть в отдельных строках.
5. Используйте пробелы вокруг операторов и после запятых.
6. Комментарии должны быть написаны на английском языке и начинаться с заглавной буквы.
7. Комментарии в конце строки должны быть отделяться по крайней мере **двумя пробелами.**
8. Используйте **одинарные** или **двойные кавычки** для строк, но будьте последовательны в их использовании.

## Комментарии в Python - Comments in Python

Комментарии в Python начинаются с символа `#` и продолжаются до конца строки. Они используются для добавления пояснений к коду и не влияют на выполнение программы. Комментарии помогают другим разработчикам (и вам самим) понять, что делает код.

```python
# Комментарий

# Многострочный
# комментарий

print("Hello, World!")  # Код с комментарием
```

# Введение в функции - Introduction to Functions

```python
def hello(name):
    print("Hello,", name)
    print("Hi,", name)


hello('Alice')  # Call the hello function
hello("Bob")
```

```python
def sum_nums(a, b):
    sum = a + b
    return sum


first_num = sum_nums(5, 10)
print(first_num)

print(sum_nums(50.5, 20))

print(sum_nums(sum_nums(50.5, 20), 30))
```

# Выражения и инструкции - Expressions and Statements

## Выражения - Expressions

**Результатом выражения является значение**
**Результатом каждого выражения является значение.**
**Выражение - это комбинация значений, переменных и операторов, которая вычисляется в одно значение. Например:**

```python
10 + 5 # 15 - Сумма значений
```

```python
a > b # True или false
```

```python
'Hello ' + 'World' # Hello World
```

```python
my_func(10, 5) # результат функции
```

## Инструкции - Statements

**Инструкция - это команда, которая выполняет действие.**
**Инструкция - это строка кода, которая выполняет какое-то действие. Например:**

```python
print("Hello, World!")  # Выводит строку на экран
```

```python
x = 5  # Присваивает значение 5 переменной x
```

```python
# Условная инструкция
if my_name:
    print(my_name)
```

```python
# Импортирование модуля
import datetime
```

```python
# Цикл
for i in range(5):
    print(i)
```

```python
# Функция
def greet(name):
    print("Hello,", name)
```

```python
if a > b:
    print("a больше b")
```

# Переменные - Variables

Переменные дают возможность повторного доступа к значениям. Они позволяют сохранять данные и использовать их в разных частях программы. Например:

```python
x = 5
y = 10
z = x + y
print(z)  # Вывод: 15
```

```python
name = "Alice"
age = 30
print("Имя:", name)
print("Возраст:", age)
```

**Имена в Python**

- **snake_case** - Переменные, функции, методы, модули
- **PascalCase** - Классы
- **my-package** - Пакеты
- **DB_PASSWORD** - Константы

Названия переменных должны быть понятными и описательными, чтобы код был более читаемым. Например, вместо использования однобуквенных имен, таких как `x` или `y`, лучше использовать более информативные имена, такие как `user_age` или `total_price`.

## Объявление и присваивание переменных - Declaration and Assignment of Variables

```python
my_variable = 10
my_variable = 'Alice'
my_variable = True
```

**Python - язык с динамической типизацией**

**Тип переменной определяется типом присваиваемого значения.**

Переменные могут изменять свой тип во время выполнения программы. Например:

```python
my_variable = 10
print(my_variable)  # Вывод: 10
my_variable = 'Alice'
print(my_variable)  # Вывод: Alice
my_variable = True
print(my_variable)  # Вывод: True
```

# Типы и структуры данных - Types and Data Structures

## Динамическая типизация - Dynamic Typing

Статическая и динамическая типизация - это два подхода к определению типов переменных в языках программирования.

- **Статическая типизация**: Тип переменной определяется на этапе компиляции, и его нельзя изменить во время выполнения программы. Примеры языков со статической типизацией: Java, C++.

```
String a = 'abc'
int b = 10
b = 'xyz' # Error
```

- **Динамическая типизация**: Тип переменной определяется во время выполнения, и его можно изменять. Python является языком с динамической типизацией.

```
a = 'abc' #str
b = 10    #int
b = 'xyz' # No Error
```

**Динамическая типизация в Python**

Это не ошибки в Python

```python
a = 10
a = True
a = 'Alice'
a = None
```

```python
def print_name(name):
    print(name)

print_name('Alice') # Alice

print_name = 15

print_name('Bob') # TypeError: 'int' object is not callable
```

**Правила работы с переменными**

1. Всегда выбирать осмысленные названия
2. В названиях переменных использовать имя существительное, например **name**, **comments**, **new_photos**
   - Имя переменной должно отвечать на вопрос **"Что содержит?"**
3. Названия функций и методов начинать с глагола, например **get_data**, **create_request**, **merge_names**
   - Имя функции должно отвечать на вопрос **"Что выполняет или возвращает?"**

## Типы и структуры данных - Types and Data Structures

В **Python** отсутствуют примитивные типы

В **Python** существуют изменяемые (mutable) и неизменяемые (immutable) объекты

**Типы неизменяемых объектов:**

- string (строка) **str**
- boolean (логический) **bool**
- integer (целое число) **int**
- float (число с десятичной точкой) **float**
- tuple (кортеж) **tuple**
- None (ничто) **NoneType**

**Типы изменяемых объектов:**

- list (список) **list**
- dictionary (словарь) **dict**
- set (набор) **set**
- user-defined classes (пользовательские классы)

## Переменные и объекты - Variables and Objects

В Python переменные являются ссылками на объекты в памяти. Когда вы присваиваете значение переменной, вы на самом деле создаете ссылку на объект, который хранит это значение.

```python
a = [1, 2, 3]
b = a
b.append(4)
print(a)  # Вывод: [1, 2, 3, 4]
```

В этом примере переменная `a` ссылается на список `[1, 2, 3]`. Когда мы присваиваем `b = a`, переменная `b` также начинает ссылаться на тот же список. Изменения, внесенные через `b`, также отражаются в `a`, поскольку обе переменные ссылаются на один и тот же объект.

**Изменяемые и неизменяемые объекты - Mutable and Immutable Objects**

- **Неизменяемые объекты**: Это объекты, которые не могут быть изменены после их создания. Примеры: строки, кортежи, числа.
- **Изменяемые объекты**: Это объекты, которые могут быть изменены после их создания. Примеры: списки, словари, множества.

```python
# Неизменяемый объект
a = (1, 2, 3)
# a[0] = 4  # Ошибка: 'tuple' object does not support item assignment

# Изменяемый объект
b = [1, 2, 3]
b[0] = 4
print(b)  # Вывод: [4, 2, 3]
```

```python
# Пример с неизменяемым объектом
s = "Hello"
s[0] = "h"  # Ошибка: 'str' object does not support item assignment

# Пример с изменяемым объектом
lst = [1, 2, 3]
lst[0] = 4
print(lst)  # Вывод: [4, 2, 3]
```

```python
# Изменяемый объект
d = {'key': 'value'}
d['key'] = 'new_value'
print(d)  # Вывод: {'key': 'new_value'}
```

## Встроенная функция id - Built-in function id

Переменная содержит **ссылку** на объект.
Получить уникальный идентификатор объекта в памяти можно с помощью функции `id()`.
Этот идентификатор является целым числом и остается постоянным для объекта на протяжении его жизни.

```python
my_number = 10
print(id(my_number))  # Вывод: уникальный идентификатор для числа 1684432346556

my_string = 'Hello'
print(id(my_string))  # Вывод: уникальный идентификатор для строки 164487987098
```

Переменные могут ссылаться на один объект.

```python
a = [1, 2, 3]
b = a
print(id(a))  # Вывод: уникальный идентификатор для списка # 15664777634
print(id(b))  # Вывод: тот же уникальный идентификатор, что и для a # 15664777634
```

# Строки - Strings

## Строки - str

Строка - это последовательность символов, заключенная в одинарные или двойные кавычки. Строки являются неизменяемыми объектами в Python.

**Структура и синтаксис**

```python
s = "Hello, World!" # Двойные кавычки обычно используют для многословных строк
print(s[0])  # Вывод: H
print(s[7:12])  # Вывод: World
```

**Тип строк**

```python
my_name = 'Alice'
print(my_name)  # Вывод: Alice

print(type(my_name))  # Вывод: <class 'str'> # Каждая строка - это экземпляр класса str

print(id(my_name))  # Вывод: уникальный идентификатор для строки 164487987098
```

Многострочные строки можно создавать с помощью тройных кавычек:

```python
my_bio = """Hello, my name is Alice.
I am a software developer.
I love coding in Python."""
print(my_bio)  # Вывод: Hello, my name is Alice.
               #         I am a software developer.
               #         I love coding in Python.
```

# Встроенные функции и методы строк - Built-in Functions and String Methods

Python предоставляет множество встроенных функций и методов для работы со строками. Вот некоторые из них:

> Методы строк

- `len(s)` - возвращает длину строки `s`.
- `s.lower()` - возвращает строку в нижнем регистре.
- `s.upper()` - возвращает строку в верхнем регистре.
- `s.capitalize()` - возвращает строку с заглавной буквы.
- `s.count(substring)` - возвращает количество вхождений подстроки `substring` в строке `s`.
- `s.strip()` - удаляет пробелы в начале и конце строки.
- `s.split(separator)` - разбивает строку на список подстрок по разделителю.
- `s.replace(old, new)` - заменяет все вхождения подстроки `old` на `new`.
- `s.index(substring)` - возвращает индекс первого вхождения подстроки `substring` в строке `s` или -1, если не найдено.

Примеры использования:

```python
my_string = "  Hello, World!  "
print(len(my_string))  # Вывод: 15
print(my_string[3])  # Вывод: H
print(my_string[7:12])  # Вывод: World
print(my_string.lower())  # Вывод: "  hello, world!  "
print(my_string.upper())  # Вывод: "  HELLO, WORLD!  "
print(my_string.strip())  # Вывод: "Hello, World!"
print(my_string.split(","))  # Вывод: ["  Hello", " World!  "]
print(my_string.replace("World", "Python"))  # Вывод: "  Hello, Python!  "
```

# Целые и другие числа в Python - Integers and Other Numbers in Python

## Целые числа - int

Структура и синтаксис

```python
friends_qty = 50
print(friends_qty) # 50

print(type(friends_qty))  # Вывод: <class 'int'> # Каждое целое число - это экземпляр класса int
```

Конвертация строки в число

```python
age_str = "30"
age = int(age_str)
print(age)  # Вывод: 30
print(type(age))  # Вывод: <class 'int'>
```

Возведение в степень

```python
base = 5
power = 3

print(pow(base, power))  # Вывод: 125
```

Длинные числа

```python
one_million = 1_000_000
print(one_million)  # Вывод: 1000000

my_number = 3_427
print(my_number)  # 3427
```

```python
# Целые числа
a = 10
b = 20
c = a + b
print(c)  # Вывод: 30

# Вещественные числа
x = 10.5
y = 20.3
z = x + y
print(z)  # Вывод: 30.8

# Комплексные числа
d = 1 + 2j
e = 3 + 4j
f = d + e
print(f)  # Вывод: (4+6j)
```

## Числа с десятичной точкой - float

Структура и синтаксис

```python
average_price = 17.25

print(average_price)  # Вывод: 17.25

print(type(average_price))  # Вывод: <class 'float'>
Каждое число с десятичной точкой - это экземпляр класса float.
```

Конвертация чисел

```python
average_price = 28.75
price = int(average_price)

print(price)  # Вывод: 28
print(type(price))  # Вывод: <class 'int'>

str_temperature = '14.5'
temperature = float(str_temperature)

print(temperature)  # Вывод: 14.5
print(type(temperature))  # Вывод: <class 'float'>
```

Округление чисел

```python
average_price = 17.25
print(round(average_price)) # 17

rate = 0.78

print(round(rate))  # 1
print(type(round(rate)))  # Вывод: <class 'int'>
```

## Комплексные числа - complex

Комплексное число состоит из действительной и мнимой частей. В Python комплексные числа обозначаются с помощью суффикса `j` или `J`.

Структура и синтаксис

```python
complex_a = 3 + 5j
complex_b = 4 + 7j

sum = complex_a + complex_b
print(sum)  # Вывод: (7+12j)

print(type(sum))  # Вывод: <class 'complex'>
Каждое комплексное число - это экземпляр класса complex.
```

# Логический тип

## Логический тип - bool

Структура и синтаксис

```python
is_authorized = True

print(is_authorized)  # Вывод: True
print(type(is_authorized))  # Вывод: <class 'bool'>
Каждое логическое значение - это экземпляр класса bool.
```

**BOOL** часто используется при проверке правдивости выражения

Результат выражений

```python
print(100 > 24) # True
print(-5 > 0) # False
print('Long string' > 'Long') # True
print([1, 2, 3] == [1, 2, 3]) # True
```

Конвертация в логическое значения

```python
bool(my_value)
```

# Магические методы - Magic Methods

## Конвертация типов - Type Conversion

**Python не выполняет неявную конвертацию типов значений.**
Все конвертации типов должны быть явными.
Конвертация типов - это процесс преобразования значения из одного типа данных в другой. В Python есть несколько встроенных функций для конвертации типов:

- `int()` - преобразует значение в целое число.
- `float()` - преобразует значение в число с плавающей запятой.
- `str()` - преобразует значение в строку.
- `bool()` - преобразует значение в логическое значение.

В других случаях **возникает ошибка TypeError**

```python
print('a' + 3)
# TypeError: can only concatenate str (not "int") to str
```

В некоторых случаях **ошибок нет**

```python
int_num = 5
float_num = 4.5
print(int_num + float_num) # 9.5

bool_val = True
int_val = 7
print(bool_val + int_val) # 8
```

**Как выполняется сложение?**

```python
int_num = 5
float_num = 4.5
print(int_num + float_num) # 9.5

print(int_num.__add__(float_num))
# NotImplemented
# Магический метод (magic method)
# Метод __add__ класса int

print(float_num.__radd__(int_num))
# 9.5
# Метод __radd__ класса float
```

## Магические методы - Magic Methods

Магические методы - внутренние методы классов и они обычно не вызываются явно
Магические методы - это специальные методы в Python, которые начинаются и заканчиваются двойным подчеркиванием
Например: `__init__`, `__str__`, `__add__`, `__and__`, `__mul__`, `__rmul__`, `__eq__`, `__neq__`, `__or__` ...
Они позволяют определять поведение объектов при выполнении различных операций, таких как арифметические операции, сравнения, преобразования типов и другие.

# Списки - Lists

## Списки - list

**Список - упорядоченная последовательность элементов**, которая может содержать элементы разных типов. Списки в Python создаются с помощью квадратных скобок `[]`.

Структура и синтаксис

```python
fruits = ['apple', 'banana', 'cherry']

posts_ids = [151, 245, 762, 167]

user_inputs = [True, 'hi', 'symbol', 10.5]
```

**Порядок элементов в списке имеет значение**

```python
fruits = ['apple', 'banana', 'cherry']

other_fruits = ['banana', 'apple', 'cherry']

print(fruits == other_fruits)  # Вывод: False
```

**Длина списка**

```python
empty_list = []
print(len(empty_list))  # Вывод: 0

my_fruits = ['apple', 'banana', 'cherry']
print(len(my_fruits))  # Вывод: 3

posts_ids = [151, 245, 762, 167]
print(len(posts_ids))  # Вывод: 4

user_inputs = [True, 'hi', 'symbol', 10.5]
print(len(user_inputs))  # Вывод: 4
```

**Получение значений из списка**

```python
posts_ids = [151, 245, 762, 167]

print(posts_ids[0])  # Вывод: 151
print(posts_ids[1])  # Вывод: 245
print(posts_ids[-1])  # Вывод: 167
```

**Изменение элементов списка**

```python
my_fruits = ['apple', 'banana', 'cherry']

my_fruits[1] = 'blueberry'
print(my_fruits)  # Вывод: ['apple', 'blueberry', 'cherry']
```

**Удаление элементов из списка**

```python
my_fruits = ['apple', 'banana', 'cherry']

del my_fruits[1]
print(my_fruits)  # Вывод: ['apple', 'cherry']
```

**Срезы списков**

```python
my_fruits = ['apple', 'banana', 'cherry', 'orange']

print(my_fruits[1:3])  # Вывод: ['banana', 'cherry']
```

**Список словарей**

```python
users = [
    {'user_id': 831, 'user_name': 'Alice'},
    {'user_id': 832, 'user_name': 'Bob'},
    {'user_id': 833, 'user_name': 'John'}
]

print(len(users)) # 3
print(users[1]['user_id']) # 832
```

**Использование переменных**

```python
my_fruit = 'apple'
other_fruit = 'banana'
new_fruit = 'lime'

all_fruits = [my_fruit, other_fruit, new_fruit]

print(all_fruits) # ['apple', 'banana', 'lime']
```

**Несуществующие элементы**

```python
posts_ids = [151, 245, 762, 167]

print(posts_ids[10]) # IndexError: list index out of range
```

## Методы списков - List methods

Методы списков объекты наследуют от класса **list**.
Методы списков - это функции, которые позволяют выполнять различные операции над списками. Вот некоторые из них:

- `append(item)` - добавляет элемент в конец списка.
- `insert(index, item)` - вставляет элемент на указанную позицию.
- `remove(item)` - удаляет первый встреченный элемент со значением item.
- `pop(index)` - удаляет элемент по индексу и возвращает его.
- `clear()` - удаляет все элементы из списка.
- `index(item)` - возвращает индекс первого встреченного элемента со значением item.
- `count(item)` - возвращает количество вхождений элемента со значением item.
- `sort()` - сортирует элементы списка.
- `reverse()` - разворачивает элементы списка.

**APPEND Добавление новых элементов в список**

```python
my_fruits = []

my_fruits.append('apple')
my_fruits.append('banana')
my_fruits.append('cherry')
my_fruits.append('orange')

print(my_fruits)  # Вывод: ['apple', 'banana', 'cherry', 'orange']
print(len(my_fruits))  # Вывод: 4
```

**POP удаление элементов из списка**

```python
my_fruits = ['apple', 'banana', 'cherry', 'orange']

my_fruits.pop() # removed: orange Удаление последного элемента списка
print(my_fruits)  # Вывод: ['apple', 'banana', 'cherry']

my_fruits.pop(0) # removed: apple Удаление элемента по индексу
print(my_fruits)  # Вывод: ['banana', 'cherry']

removed_element = my_fruits.pop()
print(removed_element)  # Вывод: cherry
print(my_fruits)  # Вывод: ['banana']
```

**SORT Сортировка элементов списка**

```python
my_fruits = ['banana', 'cherry', 'apple', 'orange']

my_fruits.sort()
print(my_fruits)  # Вывод: ['apple', 'banana', 'cherry', 'orange']

posts_ids = [151, 245, 762, 167]
posts_ids.sort()
print(posts_ids)  # Вывод: [151, 167, 245, 762]

posts_ids.sort(reverse=True)
print(posts_ids)  # Вывод: [762, 245, 167, 151]
```

## Разные операции со списками - List comprehensions

**Конвертация в список**

```python
greeting = "Hello from Python"
greeting_letters = list(greeting)
print(greeting_letters)  # Вывод: ['H', 'e', 'l', 'l', 'o', ' ', 'f', 'r', 'o', 'm', ' ', 'P', 'y', 't', 'h', 'o', 'n']

my_dict = {'a': 10, 'b': True}
my_dict_keys = list(my_dict)
print(my_dict_keys)  # Вывод: ['a', 'b']
```

**Арифметические операции со списками**

```python
ratings = [2.5, 5.0, 4.3, 3.7]

print(min(ratings))  # Вывод: 2.5
print(max(ratings))  # Вывод: 5.0
print(sum(ratings))  # Вывод: 15.5

print(sum(ratings) / len(ratings))  # Вывод: 3.875
```

**Объединение списков**

```python
my_ratings = [2.5, 5.0]
other_ratings = [3.7, 4.5, 4.9]

all_ratings = my_ratings + other_ratings
# При использовании оператора + вызывается метод списков __add__
print(all_ratings)  # Вывод: [2.5, 5.0, 3.7, 4.5, 4.9]
```

**Нарезка списков**

```python
ratings = [2.5, 5.0, 4.3, 3.7, 4.5]

first_two_ratings = ratings[:2]
print(first_two_ratings)  # Вывод: [2.5, 5.0]

middle_ratings = ratings[1:-1]
print(middle_ratings)  # Вывод: [5.0, 4.3, 3.7]

last_two_ratings = ratings[-2:]
print(last_two_ratings)  # Вывод: [3.7, 4.5]
```
