# JavaScript

## JavaScript - ВЫРАЖЕНИЯ, ФУНКЦИИ, ОБЪЕКТЫ

### Практически все сущности в JavaScript - ОБЪЕКТЫ

> [!NOTE] > **ОБЪЕКТ** - Набор свойств. "имя: значение".

Пример объекта:

```
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
- Число - это Объект[*]
- Строка - это Объект[*]
  [*]ведут себя как Объекты

console.log('Hello World')
Объект.Точечная запись.Метод(Вызов метода)

## ВЫРАЖЕНИЯ - возвращает значение

Примеры:

```
'abc' // 'abc'
10  // 10
5 + 2 // 7
c = 10 // 10
'Good ' + 'Evening' // 'Good Evening'
a <= b || c !== d // true or false
myFunction(c, d) // результат функции
```

> Результатом каждого выражения является - Значения

### Выражение присваивания

```
 a = 20
```

Выражение с побочными действиями
Не только возвращает значение, но и выполняет другие действия

```
a =5
b++
myFunction(c, d)
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

```
let a = 10
a = 20
let b
b = false
```

const

```
const c = 10
c = 20
//TypeError: Assignment to constant variable.
```

### Объявление и присваивание

```
condole.log(a) // ReferenceError: a is not defined
let a
console.log(a) // undefined
a = true
console.log(a) // true
```

Тип переменной определяется типом присвоенного значения

```
const a = 10 // Type of Number
const b = 'abc' // Type of String
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

```
String a = 'abc'
int b = 10
b = 'xyz' // Error
```

### динамическая типизации

```
a = 'abc' // String
a = 10 // Number
```

> [!NOTE] > **JavaScript** - динамически типизируемый язык

### Динамическая типизация в **JavaScript**

```
let a = 10
a = true
a = 'Bogdan'
a = undfined
```

```
function a() {
  console.log('Hey there')
}

a () // 'Hey there'

a = 10

a() // Uncaught TypeError: a is not a funciton
```

### const для объявления переменных

```
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

```html
const myCity = { city: 'New York', popular: true, country: 'USA' }
```

**Порядок свойств в объекте _не имеет значения_**

**Получение значений свойств**

> Dot notation - Точечная запись

```html
const myCity = { city: 'New York', popular: true, country: 'USA' } myCity.city
// 'New York' myCity.popular // true
```

**Изменение значений свойств**

```html
const myCity = { city: 'New York', } myCity.city = 'Las Vegas' // 'Las Vegas'
```

**Добавление новых свойств**

```html
const myCity = { city: 'New York', } myCity.popular = true myCity.country =
'USA' console.log(myCity) // {city: 'New York', popular: true, country: 'USA'}
```

**Удаление свойств**

```html
const myCity = { city: 'New York', popular: true, country: 'USA' } delete
myCity.country console.log(myCity) // {city: 'New York', popular: true}
```

**Доступ к значению свойства с использованием скобок**

> Bracket notation - Скобочная запись

```html
const myCity = { city: 'New York', } myCity['popular'] = true
console.log(myCity) // {city: 'New York', popular: true} const
countryPropertyName = 'country' myCity[countryPropertyName] = 'USA'
console.log(myCity) // {city: 'New York', popular: true, country: 'USA'}
```

**Вложенные свойства**

```html
const myCity = { city: 'New York', info: { isPopular: true, country: 'USA' } }
console.log(myCity.info.isPopular) // true delete myCity.info['isPopular']
console.log(myCity) // {city: 'New York', info: {country: 'USA'}}
```

**Использование переменных**

```html
const name = 'Bogdan' const postsQty = 23 const userProfile = { name: name,
postsQty: postsQty, hasSignedAgreement: false }
```

**Сокращенный формат записи свойств**

> Сокращенные свойства рекомендуется размещать в начале объекта

```html
const name = 'Bogdan' const postsQty = 23 const userProfile = { name, postsQty,
hasSignedAgreement: false }
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

```html
const myCity = { city: 'New York', cityGreeting: function () {
console.log('Greetings!!!') } } myCity.cityGreeting() // 'Greetings!!'
```

**Сокращенный формат записи методов**

```html
const myCity = { city: 'New York', cityGreeting() { console.log('Greetings!!!')
} } myCity.cityGreeting() // 'Greetings!!'
```

### JSON - JavaScript Object Notation

> Формат обмена данными

```
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
> JSON.parse() - Конвертация JSON в -> JavaScript объект.
> JSON.stringify() - Конвертация JavaScript объекта в -> JSON.

### Мутация в JavaScript

**Значения примитивных типов**

```
const a = 10
let b = a       Копирование значения (copy by value)
b = 30

console.log(a) // 10 Значение "a" не изменилось console.log(b) // 30
```

**Значения ссылочного типа**

```
const person = {
  name: 'Bob',
  age: 21
}

person.age = 22
person.isAdult = true

console.log(person.age) // 22
console.log(person.isAdult) // true
```
