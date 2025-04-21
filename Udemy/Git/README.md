# Git

### Git - распределенная система управления версииями

### Почему стоит использовать Git

- Позволяет сохранять различные версии проектов
- Быстрый переход между различными версиями проекта
- Откат к предыдущим версиям при необходимости
- Улучшает процесс командной работы над одними и теми же проектами
- Независимая одновременная разработка различных новых функций в проекте

### Разница между Git и Guthub

- Git - распределенная система контроля версий
- GutHub - сервис хостинга Git репозиториев

### На каждом компьютере находится полная версия репозитория

### Это позволяет работать с Git репозиториями локально даже без интернета

> Настройка имени и почты автора

```bash
git config --global user.name "Your Name"
git config --global user.email "Your Email"
```

> Создание нового Git репозитория

```bash
git init
```

После инициализации создается скрытая папка .git

### Области Git - Git areas

```mermaid
flowchart TD
    A@{ shape: lin-cyl, label: "Working directory" }
    B@{ shape: lin-cyl, label: "Staging area" }
    C@{ shape: lin-cyl, label: "Repository" }
```

### Рабочая директория - working directory

<p align="left">
<img src="./images/working-directory-git.jpg" height="500">
</p>

### Индекс - staging area

<p align="left">
<img src="./images/staging-area.webp" height="200">
</p>

### Репозиторий - repository

Сохраненные объекты в репозитории

<p align="left">
<img src="./images/repository-git.jpg" height="500">
</p>

Git сохраняет различные версии одного и того же файла

### Рабочий процесс Git

<p align="left">
<img src="./images/working-process-git.png" height="500">
</p>

### Статусы отслеживания файлов

```mermaid
flowchart LR
    id1(Untracked - неотслеживаемый) ~~~ id2(Unmodified - немодифицированный)
    id3(Modified - модифицированный) ~~~ id4(Staged - подготовленный)
    style id1 fill:#0072E3,stroke:#000,stroke-width:4px,color:#fff
    style id2 fill:#00A374,stroke:#000,stroke-width:4px,color:#fff
    style id3 fill:#34397A,stroke:#000,stroke-width:4px,color:#fff
    style id4 fill:#00B0DB,stroke:#000,stroke-width:4px,color:#fff
```

- **Неотслеживаемым (untracked)**. О неотслеживаемых файлах Git не знает, поэтому изменения в них не будут добавлены в коммит. Это любые файлы в вашем рабочем каталоге, которые не входили в последний коммит и не подготовлены к текущему коммиту.
- **Отслеживаемым (tracked)**. Об этих файлах Git знает и отслеживает изменения в них. Отслеживаемые файлы в свою очередь могут находится в следующих состояниях:
  - **Неизмененным (unmodified)**. То есть с момента последнего коммита в файле не было никаких изменений
  - **Измененным (modified)**. То есть с последнего коммита в файле были произведены какие-то изменения
  - **Подготовленным к коммиту (staged)**. Это значит, что вы внесли изменения в этот файл и затем проиндексировали их, и эти изменения будут добавлены в следующий коммит

### Типы объектов в Git

```mermaid
flowchart LR
    id1(Blob - файл) ~~~ id2(Tree - папка)
    id3(Commit - коммит) ~~~ id4(Annotated Tag - аннотированный тег)
    style id1 fill:#0072E3,stroke:#000,stroke-width:4px,color:#fff
    style id2 fill:#00A374,stroke:#000,stroke-width:4px,color:#fff
    style id3 fill:#34397A,stroke:#000,stroke-width:4px,color:#fff
    style id4 fill:#00B0DB,stroke:#000,stroke-width:4px,color:#fff
```

### Хэши объектов и SHA1 хэш-функция

Каждый объект в Git имеет уникальный ID (SHA1 ХЭШ)

```mermaid
flowchart LR
subgraph "`****`"
  a("`Входные данные
  переменной длины`") -- "`SHA1 хэш-функция`" --> d("553AE74GFDHH747896DHGD877F8F790S0987F6GF") -- "`Фиксированная длина (160 бит) 40 шестнадцатеричных символов`"
end
```
