# JavaScript

## JavaScript - ВЫРАЖЕНИЯ, ФУНКЦИИ, ОБЪЕКТЫ

### Практически все сущности в JavaScript - ОБЪЕКТЫ

> [!NOTE]
>
> **ОБЪЕКТ** - Набор свойств. "имя: значение"

Пример объекта:

```js
{
 visible: true,
 colorDepth: 24,
 title: 'My Image',
 orientation: {
   angle: 0,
   type: 'landscape'
 },
 pixelDepth: 25,
 width: 1920
}
```

- Массив - это Объект
- Функция - это Объект
- Число - это Объект<sup>\*</sup>
- Строка - это Объект<sup>\*</sup>
  <sup>\*</sup>ведут себя как Объекты

console.log('Hello World')
console => Объект . => Точечная запись log => Метод () => Вызов метода

## ВЫРАЖЕНИЯ - возвращает значение

Примеры:

```js
"abc"; // 'abc'
10; // 10
5 + 2; // 7
c = 10; // 10
"Good " + "Evening"; // 'Good Evening'
a <= b || c !== d; // true or false
myFunction(c, d); // результат функции
```

> Результатом каждого выражения является - Значения

### Выражение присваивания

```js
a = 20;
```

Выражение с побочными действиями
Не только возвращает значение, но и выполняет другие действия

```js
a = 5;
b++;
myFunction(c, d);
```

## ПЕРЕМЕННЫЕ

> Переменные дают возможность повторного доступа к значениям

### Имена переменных

- **PascalCase** - Типы и классы
- **DB_PASSWORD** - Значения известны до запуска приложения и не меняются (сonstants)
- **camelCase** - Все остальные переменные (Используется чаще всего)

Названия переменных должны быть понятными

### Объявление переменных

- var -
- let - Появились в ECMAScript 6
- const - Появились в ECMAScript 6

let

```js
let a = 10;
a = 20;
let b;
b = false;
```

const

```js
const c = 10;
c = 20;
//TypeError: Assignment to constant variable.
```

### Объявление и присваивание

```js
condole.log(a); // ReferenceError: a is not defined
let a;
console.log(a); // undefined
a = true;
console.log(a); // true
```

Тип переменной определяется типом присвоенного значения

```js
const a = 10; // Type of Number
const b = "abc"; // Type of String
```

## ТИПЫ

- ### Примитивные типы

```
string (строка)
boolean (логический)
number (число)
null
undefined
symbol (символ)
```

- ### Ссылочный тип

```
object (объект)
```

## ДИНАМИЧЕСКАЯ ТИПИЗАЦИЯ

### Статическая типизации

```js
String a = 'abc'
int b = 10
b = 'xyz' // Error
```

### динамическая типизации

```js
a = "abc"; // String
a = 10; // Number
```

> [!NOTE]
>
> **JavaScript** - динамически типизируемый язык

### Динамическая типизация в **JavaScript**

```js
let a = 10;
a = true;
a = "Bogdan";
a = undfined;
```

```js
function a() {
  console.log("Hey there");
}

a(); // 'Hey there'

a = 10;

a(); // Uncaught TypeError: a is not a funciton
```

### const для объявления переменных

```js
conat a = () => {
  console.log('Hey there')
}

a() // 'Hey there'

a = 10 // TypeError: Assignment to constat variable

a()
```

> [!NOTE]
> Правила работы с переменными
>
> 1. Все переменные объявлять перед их использованием
> 1. Стараться использовать **const** везде, где это возможно

## ОБЪЕКТЫ

### Объект - тип переменных

**Структура и синтаксис**

```js
const myCity = {
  city: "New York",
  popular: true,
  country: "USA",
};
```

**Порядок свойств в объекте _не имеет значения_**

**Получение значений свойств**

> Dot notation - Точечная запись

```js
const myCity = {
  city: "New York",
  popular: true,
  country: "USA",
};

myCity.city; // 'New York'
myCity.popular; // true
```

**Изменение значений свойств**

```js
const myCity = {
  city: "New York",
};

myCity.city = "Las Vegas"; // 'Las Vegas'
```

**Добавление новых свойств**

```js
const myCity = {
  city: "New York",
};

myCity.popular = true;
myCity.country = "USA";

console.log(myCity); // {city: 'New York', popular: true, country: 'USA'}
```

**Удаление свойств**

```js
const myCity = {
  city: "New York",
  popular: true,
  country: "USA",
};

delete myCity.country;

console.log(myCity); // {city: 'New York', popular: true}
```

**Доступ к значению свойства с использованием скобок**

> Bracket notation - Скобочная запись

```js
const myCity = {
  city: "New York",
};

myCity["popular"] = true;
console.log(myCity); // {city: 'New York', popular: true} const

countryPropertyName = "country";
myCity[countryPropertyName] = "USA";
console.log(myCity); // {city: 'New York', popular: true, country: 'USA'}
```

**Вложенные свойства**

```js
const myCity = {
  city: "New York",
  info: {
    isPopular: true,
    country: "USA",
  },
};

console.log(myCity.info.isPopular); // true
delete myCity.info["isPopular"];
console.log(myCity); // {city: 'New York', info: {country: 'USA'}}
```

**Использование переменных**

```js
const name = "Bogdan";
const postsQty = 23;

const userProfile = {
  name: name,
  postsQty: postsQty,
  hasSignedAgreement: false,
};
```

**Сокращенный формат записи свойств**

> Сокращенные свойства рекомендуется размещать в начале объекта

```js
const name = "Bogdan";
const postsQty = 23;

const userProfile = {
  name,
  postsQty,
  hasSignedAgreement: false,
};
```

### ГЛОБАЛЬНЫЕ ОБЪЕКТЫ

> - window - Веб браузеры
> - global - Node.js
> - globalThis - Унифицированный глобальный объект

**Свойства глобальных объектов**

> - console
> - window.console
> - global.console

### МЕТОДЫ

> Метод - свойство объекта, значение которого - функция

**Методы - свойства объекта, которые содержат функции**

```js
const myCity = {
  city: "New York",
  cityGreeting: function () {
    console.log("Greetings!!!");
  },
};

myCity.cityGreeting(); // 'Greetings!!'
```

**Сокращенный формат записи методов**

```js
const myCity = {
  city: "New York",
  cityGreeting() {
    console.log("Greetings!!!");
  },
};

myCity.cityGreeting(); // 'Greetings!!'
```

### JSON - JavaScript Object Notation

> Формат обмена данными

```js
{
  "userId": 1,
  "id": 1,
  "title": "Test title",
  "status": {
    "completed": false
  }
}
```

> Передача дынных в формате JSON - передается в виде строки

```
{"userId":1,"id":1,"title":"Test title","status":{"completed":false}}
```

> [!NOTE]
>
> **JSON.parse()** - Конвертация JSON в -> JavaScript объект.
> **JSON.stringify()** - Конвертация JavaScript объекта в -> JSON.

### Мутация в JavaScript

**Значения примитивных типов**

```js
const a = 10
let b = a       Копирование значения (copy by value)
b = 30

console.log(a) // 10 Значение "a" не изменилось console.log(b) // 30
```

**Значения ссылочного типа**

```js
const person = {
  name: 'Bob',
  age: 21
}

person.age = 22                   Мутация объекта, на который ссылается переменная "person"
person.isAdult = true             Мутация объекта, на который ссылается переменная "person"

console.log(person.age) // 22
console.log(person.isAdult) // true
```

**Мутирование копий**

```js
const person = {
  name: 'Bob',
  age: 25
}

const person2 = person              Копирование ссылки (copy by reference)

person2.age = 26                    Мутация объекта, на который ссылается "person2"
person2.isAdult = true              Мутация объекта, на который ссылается "person2"

console.log(person.age) // 26       Мутация также отразилась на переменной "person"
console.log(person.isAdult) // true Мутация также отразилась на переменной "person"
```

**Как избежать мутаций**

> Вариант 1

```js
const person = {
  name: "Bob",
  age: 25,
};

const person2 = Object.assign({}, prerson);
// Если у объекта есть вложенные объекты, то ссылки на них сохраняются
person2.age = 26;

console.log(person2.age); // 26
console.log(person.age); // 25
```

> Вариант 2

```js
const person = {
  name: "Bob",
  age: 25,
};

const person2 = { ...person }; // Оператор разделения объекта на свойства
// Ссылки на вложенные объекты сохраняются
person2.name = "Alice";

console.log(person2.name); // Alice
console.log(person.name); // Bob
```

> Вариант 3

```js
const person = {
  name: "Bob",
  age: 25,
};

const person2 = JSON.parse(JSON.stringify(person));
// Ссылки на вложенные объекты не сохраняются
person2.name = "Alice";

console.log(person2.name); // Alice
console.log(person.name); // Bob
```

## ФУНКЦИИ

**Функция - блок кода, который можно выполнять многократно**

```js
let a = 5;
let b = 3;

let c;

c = a + b;
console.log(c); // 8

a = 8;
b = 12;

c = a + b;
console.log(c); // 20
```

```js
let a = 5;
let b = 3;

function sum(a, b) {
  const c = a + b;
  console.log(c);
}

sum(a, b); // 8

a = 8;
b = 12;

sum(a, b); // 20
```

> Функция может быть...
>
> - ... именованной
> - ... анонимной
> - ... присвоена переменной
> - ... аргументом при вызове другой функции
> - ... значением свойства (метода) объекта

**Функция - это объект**

```js
function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}
```

> Исползуйте console.dir(myFn) чтобы отобразились свойства объекта

<p align="left">
<img src="./images/light.png" height="150">
</p>

<p align="center">
<img src="./images/function.png" height="300">
</p>

**Функция возвращает UNDEFINED если нет инструкции RETURN**

**Вызов функции**

```js
function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}

myFn(10, 3); // 14
```

> 1. Параметрам "a" и "b" присваиваются значения 10 и 3
> 2. Объявляется перменная "c"
> 3. Значение "a" увеличивается на 1
> 4. Сумма значений "a" и "b" присваивается "c"
> 5. Возвращается значение "c"

**Самая короткая функция**

```js
function myFn() {}

myFn(); // undefined
```

**Передача значения по ссылке**

```js
const personOne = {
  name: "Bob",
  age: 21,
};

function increasePersonAge(person) {
  // Функция мутирует внешний объект
  person.age += 1;
  return person;
}

increasePersonAge(personOne); // Передача объекта по ссылке
console.log(personOne.age); // 22
```

> Внутри функции не рекомендуется мутировать внешние объекты

**Создание копии объекта**

```js
const personOne = {
  name: "Bob",
  age: 21,
};

function increasePersonAge(person) {
  const updatePerson = Object.assign({}, person);
  updatesPerson.age += 1;
  return updatedPerson;
}

const upodatedPersonOne = increasePersonAge(personOne);
console.log(personOne.age); // 21 Объект "personOne" не изменился!
console.log(updatedPersonOne.age); // 22
```

### Колбэк функции

```js
function anotherFunction() {
  //.Действия..
}

function fnWithCallback(callbackFunction) {
  callbackFunction(); // В теле этой функции вызывается колбэк функция
}

fnWithCallback(anotherFunction);
```

> Пример

```js
function printMyName() {
  console.log("Bogdan");
}

setTimeout(printMyName, 1000); // Функция "printMyName" будет вызвана через 1000 миллисекунд
// setTimeoout - Встроенная функция
```

**Правила работы с функциями**

> 1. **Называть** функции исходя из выполняемых задач
> 2. **Одна** функция должна выполнять **одну** задачу
> 3. Не рекомендуется изменять **внешние** относительно функции **переменные**

**Области видимости**

> Области видимости определяет границы действия переменной.

> Глобальные переменные vs локальные переменные.

> Области видимости

```js
let a;
let b;

function myFn() {
  let b;
  a = true;
  b = 10;
  console.log(b); // 10
}

myFn();

console.log(a); // true
console.log(b); // undefined
```

> Цепочка областей видимости

```js
const a = 5;
function myFn() {
  function innerFn() {
    console.log(a); // 5
  }
  innerFn();
}
myFn();
```

<p align="center">
<img src="./images/scope-js.webp" height="300">
</p>

> Жизненный цикл переменных (Переменная "b")

```js
let a;
let b; // 1. Объявление "b" в глобальной области видимости. Ее значение undefined

function myFn() {
  let b; // 3. Объявление "b" в зоне видимости функции
  a = true;
  b = 10; // 4. Объявлена ли "b" в рамках функции? ДА
  console.log(b); // 10   5. "b" имеет значение 10 в области видимости функции
}

myFn(); // 2. Вызов myFn

console.log(a); // true
console.log(b); // undefined  6. "b" все так же имеет значение undefined в глобальной области
```

> Жизненный цикл переменных (Переменная "a")

```js
let a; // 1. Объявление "a" в глобальной области видимости. Ее значение undefined
let b;

function myFn() {
  let b;
  a = true; // 3. Объявление ли "a" в зоне видимости функции? НЕТ
  b = 10; //    Объявлена ли "a" во внешней области видимости? ДА
  console.log(a); // true   Присваивание значения true глобальной перменной "a"
}

myFn(); // 2. Вызов myFn

console.log(a); // true   4. "a" имеет значение true
console.log(b); // undefined
```

**Типы областей видимости**

- Глобальная область видимости
- Область видимости функции
- Область видимости блока
  - Переменные, объявленные с помощью **let** или **const** внутри блока имеют область видмости, ограниченную этим блоком.
  - Блок это код находится между фигурные скобками {}.

**Области видимости**

> Необъявленные переменные

> [!WARNING]
> Не рекомендуется!

```js
function myFn() {
  a = true; // Переменная "a" бедет автоматически объявлена в глобальной области видимости
  console.log(a); // true
}
myFn();
console.log(a); // true
```

**Правила работы с переменными**

1. Все переменные объявлять **перед** их использованием
2. Стараться использовать **const** везде, где это возможно
3. Внутри функций не изменять переменные с внешних областей видимости

**Строгий режим** 'use strict'

> Запрещает использование необъявленных переменных

```js
"use strict"; // Эта строка должна быть первой в глобальной области видимости или в области видимости функции

function myFn() {
  a = true; // Uncaught ReferenceErro: a is not defined at myFn
  console.log(a);
}
myFn();
console.log(a);
```

**Операторы**

> Оператор - это встроенная функция

- Операторы
- Операнды
- Унарные и Бинарные
- Инфиксная, префиксная и постфиксная записи

> Операторы

- Арифметические **+** **-** **\*** **/**
- Сравнения **===** **!==** **<=** **>=**
- Логические **!** **&&** **||**
- Присваивания **=**

> Текстовые операторы

- typeof
- instanceof
- new
- delete

```js
let a, b;

a = 10; // Присваивание
b = a; // Присваивание

let c = a + b; // Присваивание

console.log(c); // 20
```

> Оператор - встроенная функция

```js
a = 10

function =(переменная, выражение) {
  1. Получение результата выражения
  2. Поиск переменной по имени
  3. Присваивание результата выражения переменной
  4. Возврат результата выражения
}
```

> Унарные операторы

```js
// У унарных операторов всегда один операнд (аргумент)
a++;
+a;
delete obj.a;
typeof a;
new Object();
```

> Бинарные операторы

```js
// У бинарных операторов два операнда (аргумента)
a = 5;
a + b;
a += 5;
a === b;
a && b;
```

> Инфиксная запись

```js
a = true;
a + b;
a += 5;
a || b;
a > b;
```

> Префиксная запись

```js
++a;
delete obj.a;
typeof a;
```

> Постфиксная запись

```js
a++;
myFunction();
```

> Приоритетность операторов

> Логические операторы

- ! -- НЕ - Всегда возвращает значение типа **boolean**
- && -- И - Возвращают значение одного из операндов
- || -- ИЛИ - Возвращают значение одного из операндов

> Ложные значения

```js
// Boolean(value) -> false
false;
0;
("");
undefined;
null;
Boolean(false); // false
Boolean(0); // false
Boolean(""); // false
Boolean(undefined); // false
Boolean(null); // false
```

> Оператор **!** чаще всего используется в условных инструкциях

> Примеры с оператором **!**

```js
!10; // false
!0; // true
!"abc"; // false
!""; // true
!true; // false
undefined; // true
```

> Отрицание отрицания **!!**

```js
!!10; // true
!!0; // false Позволяет проверить ложность значения
!!"abc"; // true
!!""; // false
!!true; // true
!!undefined; // false
```

> Операторы **&&** и **||** являются операторами короткого замыкания

> Оператор **&&**

```js
Выражение 1 && Выражение 2

Если "Выражение 1" ложно:
1. Выражение 2 игнорируется
2. Возвращается результат "Выражение 1"
```

> Оператор **||**

```js
Выражение 1 || Выражение 2

Если "Выражение 1" истинно:
1. Выражение 2 игнорируется
2. Возвращается результат "Выражение 1"
```

> Цепочка операторов **&&** и **||**

```js
a && b && c && d;

a || b || c || d;
```

> Оператор разделения объекта на свойства ...

> Оператор ...

```js
const button = {
  width: 200,
  text: "Buy",
};

const redButton = {
  ...button,
  color: "red", // Если у объекта "button" есть свойство "color", его значение будет перезаписано
};

console.table(redButton);
```

> Объединение объектов с помощью ...

```js
const buttonInfo = {
  text: "Buy",
};

const buttonStyle = {
  color: "yellow",
  width: 200,
  height: 300,
};

const button = {
  ...buttonInfo,
  ...buttonStyle,
};

console.table(button);
```

> Конкатенация строк

> Оператор + для конкатенации строк

```js
"Hello " + "World";
("Hello World");
```

> Переменные в конкатенации строк

```js
const hello = "Hello";
const world = "World";

const greeting = hello + " " + world;
```

> Шаблонные строки

```js
const hello = "Hello";
const world = "World";

const greeting = `${hello} ${world}`; // Выражение между обратными кавычками
```

**Функциональные выражения**

> Объявленная функция vs Функциональное выражение

> Объявленная функция

```js
function myFn(a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
}
```

> Функциональное выражение

```js
function(a, b) { // нет имени
  let c;
  a = a + 1;
  c = a + b;
  return c;
}
```

> [!NOTE]
> Функциональные выражения **всегда анонимные**

|                                                         | Объявленная функция | Функциональное выражение |
| ------------------------------------------------------- | ------------------- | ------------------------ |
| Имеет имя                                               | ДА                  | НЕТ                      |
| Можно использовать автономно                            | ДА                  | НЕТ                      |
| Можно присваивать переменной                            | ДА                  | ДА                       |
| Можно использовать как аргумент в вызове другой функции | ДА                  | ДА                       |

> Присваивание функционального выражения переменной

```js
const myFunction = function (a, b) {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

myFunction(5, 3); // 9
```

> Функциональное выражение в вызове другой функции

```js
setTimeout(function () {
  // Анонимное функциональное выражение
  console.log("Отложенное сообщение");
}, 1000);

// 'Отложенное сообщение' будует выведено в консоль через 1000 мс (1 секунд)
```

> Стрелочные функции

```js
(a, b) => {
  // Имени нету
  let c;
  a = a + 1;
  c = a + b;
  return c;
};
```

> Стрелочная функциия - **выражение**

> Стрелочные функции всегда **\*анонимные**

> Как дать имя стрелочной функции?

```js
const myFunction = (a, b) => {
  let c;
  a = a + 1;
  c = a + b;
  return c;
};

myfunction(5, 3); // 9
```

> Стрелочная функция в вызове другой функции

```js
setTimeout(() => {
  console.log("Отложенное сообщение");
}, 1000);

// 'Отложенное сообщение' будует выведено в консоль через 1000 мс (1 секунд)
```

> Сокращения в стрелочных функциях

```js
(a) => {
  // Если один параметр, то круглые скобки можно опустить
  // Тело функции
};
```

```js
(a, b) => a + b;
// Фигурные скобки можно опустить если тело функции состоит из одного выражения
// В этом случае стрелочная функция неявно возвращает результат выражения
```

> Значения параметров функции по умолчанию

> Пример 1

```js
function multByFactor(value, multiplier = 1) {
  return value * multiplier;
}

multByFactor(10, 2); // 20
multByFactor(5); // 5
```

> Пример 2

```js
const newPost = (post, addedAt = Date()) => ({
  // Значения по умолчанию вычисляются в момент вызова функции
  ...post,
  addedAt,
});

const firstPost = {
  id: 1,
  author: "Bogdan",
};

newPost(firstPost);
```

**Обработка ошибок**

> Что происходит в случае ошибок

```js
const fnWithError = () => {
  throw new Error("Some error");
};

fnWithError(); // Выполнение кода остановится после появления Uncaught ошибки

console.log("Continue...");
```

**TRY/CATCH**

```js
try {
  // Выполнение блока кода
} catch (error) {
  // Этот блок выполняется в случае возникновения ошибок в блокt try
}
```

> Пример

```js
const fnWithError = () => {
  throw new Error("some error");
};

try {
  fnWithError();
} catch (error) {
  console.error(error);
  console.log(error.message);
}
console.log("Continue..."); // Выполнение кода продолжится
```

**ИНСТРУКЦИИ**
