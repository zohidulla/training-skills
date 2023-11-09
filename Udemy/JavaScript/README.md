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
  country: "USA"
};
```

**Порядок свойств в объекте _не имеет значения_**

**Получение значений свойств**

> Dot notation - Точечная запись

```js
const myCity = {
  city: "New York",
  popular: true,
  country: "USA"
};

myCity.city; // 'New York'
myCity.popular; // true
```

**Изменение значений свойств**

```js
const myCity = {
  city: "New York"
};

myCity.city = "Las Vegas"; // 'Las Vegas'
```

**Добавление новых свойств**

```js
const myCity = {
  city: "New York"
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
  country: "USA"
};

delete myCity.country;

console.log(myCity); // {city: 'New York', popular: true}
```

**Доступ к значению свойства с использованием скобок**

> Bracket notation - Скобочная запись

```js
const myCity = {
  city: "New York"
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
    country: "USA"
  }
};

console.log(myCity.info.isPopular); // true delete myCity.info['isPopular']
console.log(myCity); // {city: 'New York', info: {country: 'USA'}}
```

**Использование переменных**

```js
const name = "Bogdan";
const postsQty = 23;

const userProfile = {
  name: name,
  postsQty: postsQty,
  hasSignedAgreement: false
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
  hasSignedAgreement: false
};
```

### ГЛОБАЛЬНЫЕ ОБЪЕКТЫ

> window - Веб браузеры
> global - Node.js
> globalThis - Унифицированный глобальный объект

**Свойства глобальных объектов**

> console
> window.console
> global.console

### МЕТОДЫ

> Метод - свойство объекта, значение которого - функция

**Методы - свойства объекта, которые содержат функции**

```js
const myCity = {
  city: "New York",
  cityGreeting: function () {
    console.log("Greetings!!!");
  }
};

myCity.cityGreeting(); // 'Greetings!!'
```

**Сокращенный формат записи методов**

```js
const myCity = {
  city: "New York",
  cityGreeting() {
    console.log("Greetings!!!");
  }
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

> ['NOTE']
>
> JSON.parse() - Конвертация JSON в -> JavaScript объект.
> JSON.stringify() - Конвертация JavaScript объекта в -> JSON.

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
  age: 25
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
  age: 25
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
  age: 25
};

const person2 = JSON.parse(JSON.stringify(person));
// Ссылки на вложенные объекты не сохраняются
person2.name = "Alice";

console.log(person2.name); // Alice
console.log(person.name); // Bob
```

## ФУНКЦИИ
