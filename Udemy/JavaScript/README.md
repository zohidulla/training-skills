# JavaScript

## JavaScript - ВЫРАЖЕНИЯ, ФУНКЦИИ, ОБЪЕКТЫ

### Практически все сущности в JavaScript - ОБЪЕКТЫ

> [!NOTE]
> ОБЪЕКТ - Набор свойств. "имя: значение"

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

Массив - это Объект
Функция - это Объект
Число - это Объект*
Строка - это Объект*
\*ведут себя как Объекты

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

Выражение присваивания

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

Имена переменных
PascalCase - Типы и классы
DB_PASSWORD - Значения известны до запуска приложения и не меняются (сonstants)
camelCase - Все остальные переменные (Используется чаще всего)

Названия переменных должны быть понятными

Объявление переменных

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

Объявление и присваивание

```
condole.log(a) // ReferenceError: a is not defined
let a
console.log(a) // undefined
a = true
console.log(a) // true
```

pause => 1:05:56
