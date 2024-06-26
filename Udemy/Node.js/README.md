# Node.js

### Node.js - среда выполнения кода JavaScript вне веб броузеров

### Что такое Node.js?

- Традиционно язык JavaScript использовался только для работы в веб-браузерах
- Node.js позволяет выполнять код JavaScript за пределами браузеров, например, на серверах

### Преимущества Node.js?

- Высокая популярность
- Один язык JavaScript для фронтенда и бэкенда
- Открытый исходный код и кроссплатформенность
- Большое количество внешних библиотек

### Node.js - лучше всего подходит для обработки потоковых данных в реальном времени

### Node.js - не лучшей выбор для обработки видео или для машинного обучения

| Javascript в веб браузере                         | Javascript в Node.js                                   |
| ------------------------------------------------- | ------------------------------------------------------ |
| Глобальный объект window                          | Глобальный объект global                               |
| Взаимодействие с ДОМ                              | Нет взаимодействия с веб браузером                     |
| Код нужно адаптировать под различные веб браузеры | Можно использовать все функции, поддерживаемые Node.js |
| Нет доступа к файловой системе клиентов           | Есть доступ к файловой системе                         |

### NODE REPL - интерактивный интерпретатор

- READ - Прочитать код, введенный пользователем
- EVALUATE - Анализ и интерпретация
- PRINT - Вывести результат в терминал
- LOOP - Начать сначала. При этом переменные, созданные ранее, сохраняются

**node filename.js** - Выполнение кода JavaScript в файле с помощью Node.js
**node** - Запуск интерактивного интерпретатора Node.js

> Взаимодействие с NODE REPL

```js
node > node
Welcome to Node.js v18.9.0.
Type ".help" for more information.
> const name = "John"
undefined
> name
'John'
> .exit
node >
```

> Получение помощи в NODE REPL

```js
> .help
.break    Sometimes you get suck, this gets you out
.clear    Alias for .break
.editor   Enter editor mode
.exit     Exit the REPL
.help     Print this help message
.load     Load JS from a file into the REPL session
.save     Save all evaluated commands in this REPL session to a file
```

### Как работает Node.js

## Архитектура Node.js

<p align="center">
<img src="./images/node-js-architecture.jpg" height="300">
</p>

- V8 Engine - Выполняет код JavaScript
- Встроенные модули Node.js - Различные API, предоставляемые Node.js, например, для доступа к файловой системе
- LibUV - Библиотека, написанная на C++, которая обеспечивает поддержку **неблокирующих** операций ввода-вывода
- C++ Bindings - Позволяет коду, написанному на JavaScript, получать доступ к функциям, написанным в библиотеке LibUV
- Внешние модули node.js, например, express, mocha

### Потоки и процессы

- Thread - Отдельный поток
- Process - Запущенная программа

> Процесс может иметь несколько потоков

### Модель одного потока на один запрос

> ! Это не Node.js!

<p align="center">
<img src="./images/single-thread.gif" height="300">
</p>

### Модель Node.js

> Node.js имеет один поток, который обрабатывает все запросы

<p align="center">
<img src="./images/Nodes-single-thread-Architecture.png" height="300">
</p>

### Блокирующие и неблокирующие операции

> [!NOTE]
>
> Если Node.js имеет **один** поток, как он обрабатывает **несколько** запросов?

> [!NOTE]
>
> Это делается благодаря **асинхронным** неблокирующим операциям

> Примеры операций ввода-вывода

- Запрос к базе данных
- Чтение или запись файла
- Взаимодействие с сетью

> [!NOTE]
>
> **Синхронные** методы блокируют процесс выполнения, **асинхронные** - нет.

> Пример блокирующей операции

```js
const fs = require("fs"); // Встроенный модуль для работы с файлами

const data = fs.readFileSync("./test.txt", "utf-8"); // Блокирующая операция
console.log("File reading finished");

console.log("Continue..."); // Выполняется после чтения файла
```

> Пример неблокирующей операции

```js
const fs = require("fs");

fs.readFile("./test.txt", "utf-8", (err, data) => {
  // Неблокирующая операция
  if (!err) {
    console.log("File reading finished");
  }
});

console.log("Continue..."); // Выполняется до окончания чтения файла
```

### Libuv с циклом событий и пулом потоков

> [!NOTE]
>
> **LIBUV** обеспечивает поддержку асинхронных неблокирующих операций.

<p align="center">
<img src="./images/nodejs-event-loop.png" height="300">
</p>

- Event loop - Обрабатывает асинхронные колбэк вызовы, связанные с различными событиями
- Thread pool - Используется для обработки блокирующих операций

## Event loop

<p align="center">
<img src="./images/event-loop.jpg" height="300">
</p>

### Event loop позволяет Node.js выполнять неблокирующие операции

### Event loop - бесконечный цикл, в котором вызываются колбэк функции, связанные с событиями

<p align="center">
<img src="./images/node-js-event-loop.webp" height="300">
</p>

> Что выполняется в Event loop?

- Колбэки, зарегистрированные для разных событий
- Выполнение в цикле событий означает выполнение в **основном** потоке

### LibUV использует Thread pool для асинхронного выполнения блокирующих операций

> Количество потоков в Thread pool

- По умолчанию количество потоков - 4
- Количетсво потоков можно увеличить до 1024

> Что выполняется с помощью Thread pool?

- Операции ввода/вывода (I/O operations)
- Задачи, создающие нагрузку на процессор

### По-возможности, LibUV использует операционную систему для выполнения задач

### Псевдокод для Event loop

Примеры событий:

- данные были записаны в файл
- получена следующая часть данных с удалленного сервера

```js
пока цикл событий работает:
  пока есть события для обработки:
    е = получить следующее событие
    если для события есть колбэк функция:
        вызвать колбэк функцию
```

### Группы событий в цикле событий

> Начало работы Event loop

- Timers - Колбэки для истёкших таймеров setTiemout? setInterval
- Pending - I/O колбэки, отложенные до следующей итерации
- Idle, Prepare - Используются внутри Node.js
- Poll - Получить и выполнить колбэки I/O
- Check - Колбэки setImmediate
- Close - close event callbacks
- Продолжить ДА => Timers, НЕТ => Выход

### События nextTick и колбэки промисов

<p align="center">
<img src="./images/next-tick.png" height="600">
</p>

> **nextTick** имеет приоритет перед другим событиями и обрабатывается на текущей итерации

### События setImmediate

> **setImmediate** вызывает колбэк функцию на текущей или следующей итерации цикла событий

> Пример **setImmediate**

```js
setImmediate(() => {
  console.log("immediate callback");
});
```

### Блокирующие операции

> [!WARNING]
> ! Код, который вы пишите, **не должен занимать** цикл событий слишком долго

## Стек вызовов (Call Stack)

```js
function thirdFunction() {
  return 10;
}

function secondFunction() {
  return thirdFunction();
}

function firstFunction() {
  return secondFunction();
}

console.log(firstFunction()); // 10
```

## Модули

### В Node.js каждый файл js является **модулем**

> Преимущества модулей

- Разделение приложения на части
- Организация кода
- Разделение ответственности
- Упрощение поддержки приложения

> Характеристики модулей

1. По умолчанию ни одна из переменных в модуле не доступна для импорта в других модулях
2. Чтобы переменная стала доступна для импорта в других модулях, её необходимо экспортировать из модуля
3. Для использования в определённом модуле переменных из других модулей, их необходимо импортивать
4. При импортировании названия переменных можно изменять

> Варианты модулей в Node.js

- CommonJS Modules - require ... // Включены по умолчанию
- ECMAScript Modules (ESM) - import ...

### Модули CommonJS

> Модули CommonJS

- module.exports - Объект для экспортирования из модуля
- require() - Функция для импорта из другого модуля

> Объект module.exports

1. По умолчанию, любой файл с расширением **.js** в Node.js является модулем **CommonJS**
2. **module** - это объект, который доступен в любом таком файле
3. **module.exports** содержит значения, экспортируемые из модуля
4. По умолчанию, **module.exports** - пустой объект и следовательно, из модуля ничего не экспортируется
5. Переменная **exports** - это копия **module.exports**

### Как устроен модуль CommonJS

```js
(function (exports, require, module, __filename, __dirname) {
  // Содержимое модуля
  // В Node.js каждый модуль CommonJS автоматически оборачивается в анонимную функцию
});
```

> Проверка наличия анонимной функции

```js
console.log(arguments.callee.toString());
```

```js
function (exports, require, module, __filename, __dirname) {
  console.log(arguments.callee.toString());
};
```

> Экспорт из модуля CommonJS

```js
function printHello() {
  // Функция printHello становится доступна в других модулях
  console.log("Hello world");
}

module.exports.printHello = printHello; // Добавление ключа с значением в объект module.exports
```

> Добавление экспорта без создания переменной

```js
module.exports.printHello = function () {
  console.log("Hello world");
};
```

```js
module.exports.printHello = () => {
  console.log("Hello world");
};
```

> Переписывание значения **module.exports**

```js
Таким образом можно экспортировать только одну переменную

module.exports = function () {
  // Изменение значения module.exports с объекта на функцию
  console.log("Hello world");
};
```

### Алиас module.exports

```js
module.exports ==> {};
По умолчанию, module.exports и exports ссылаются на один и тот же объект
exports ==> {};
```

```js
exports.printHello = function () {
  console.log("Hello world");
};
```

> Присвоение нового значения переменной **exports**

```js
Так делать нельзя, потому что exports
больше не будет ссылаться на тот же объект, что и module.exports

exports = function () {
  console.log("Hello world");
};
```

### Импорты в модулях CommonJS и функция require

> Функция require

1. **require** - это функция, которая доступна внутри каждого CommonJS модуля
2. Функция **require** используется для импорта переменных, которые экспортируются из других модулей
3. Можно импортировать из встроенных или внешних модулей, указывая имя модуля
4. Можно имопртировать из модулей приложения, указывая путь к соответствующим файлам

> Импорт из встроенных или внешних модулей

> [!NOTE]
>
> Перед использованием внешних модулей их нужно установить с помощью **npm install**

```js
const fs = require("fs"); // Нужно указать только имя встроенного или внешного модуля
```

> Импорт единственного экспорта

```js
index.js;

const usersArray = require("./users.js");
```

```js
users.js

const = [
  'Bogdan',
  'Alice',
  'Bob'
]

module.exports = users // Значение module.exports переписывается
```

> Импорт нескольких переменных

```js
index.js;

const { URL, USERNAME, PASSWORD } = require("./constants");
```

```js
constants.js

const URL = 'http://localhost:5000';
const USERNAME = 'admin';
conat PASSWORD = 'strong_pass';

exports.URL = URL;
exports.USERNAME= USERNAME;
exports.PASSWORD = PASSWORD;

// module.exports.URL = URL;
// module.exports.USERNAME= USERNAME;
// module.exports.PASSWORD = PASSWORD;
```

> Импорт функций

```js
index.js;

const getData = require("./utils.js");

getData("https://jsonplaceholder.typecode.com/posts")
  .then((posts) => console.log(posts))
  .catch((error) => console.log(error));
```

```js
utils.js;

async function getData(url) {
  const res = await fetch(url);
  const data = await res.json();
  return data;
}

module.exports = getData;
```