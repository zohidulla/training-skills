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

### Архитектура Node.js

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
