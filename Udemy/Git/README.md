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

```zsh
git config --list
user.email=xxxxxx@xxxxxx.com
user.name=xxxxxx
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

- Blob — объект, содержащий длину содержимого файла и само содержимое;
- Tree — объект, содержащий данные о состоянии директорий и поддиректорий проекта;
- Commit — ссылка на корневое дерево. Так как объект Tree хранит в себе иерархию нижележащих объектов, корень проекта — содержит всю иерархию проекта, поэтому на него ссылается коммит;
- Annotated Tag — логическая разметка для маркирования состояний объектов в git.

### Хэши объектов и SHA1 хэш-функция

Каждый объект в Git имеет уникальный ID (SHA1 ХЭШ)

```mermaid
%%{init: {"flowchart": {"htmlLabels": false}} }%%
flowchart LR
subgraph "`****`"
  a("`Входные данные
  переменной длины`") -- "`SHA1 хэш-функция`" --> b{{"`553AE74GFDHH747896DHGD877F8F790S0987F6GF`"}} -->
  c{{"`Фиксированная длина
  (160 бит)
  40 шестнадцатеричных символов`"}}
end
```

### Коммиты и ветки в Git

Коммит - указатель на дерево

<p align="left">
<img src="./images/git-commit.png" height="200">
</p>

Внутренние устройство коммита

<p align="left">
<img src="./images/commit-2.png" height="200">
</p>

- Указатель коммита — SHA1-хеш, который идентифицирует коммит;
- Email и имя автора — данные вносятся автоматически на основании параметров git config;
- Описание коммита — здесь указываются изменения, которые были внесены, версия коммита и иные данные, которые помогут понять, что коммит содержит;
- Дерево — это хеш-ссылка на корневое дерево проекта, которое содержит структуру всего проекта;
  Родительский коммит — это хеш-ссылка на предыдущий коммит;
- HEAD — указатель на текущую версию проекта, которая находится в рабочей директории проекта.

Все коммиты связаны между собой хеш-ссылками и организуют цепочку, а смещение указателя HEAD позволяет изменять текущее состояние файлов рабочий директории. Строго говоря HEAD ссылается на ветку, а ветка ссылается на последний коммит в ней, но вы можете в ручном режиме смещать HEAD на конкретный коммит минуя ветку.

<p align="left">
<img src="./images/root-commit.png" height="300">
</p>

**HEAD** – это указатель, задача которого ссылаться на определенный коммит в репозитории

<p align="left">
<img src="./images/git-head-pic1.png">
</p>
<p align="left">
<img src="./images/git-head-pic2.png">
</p>
<p align="left">
<img src="./images/git-head-pic3.png">
</p>
<p align="left">
<img src="./images/git-head-pic4.png">
</p>

### Ветка (branch) - ссылка на коммит

<p align="left">
<img src="./images/git-branch.webp" height="200">
</p>

Ветка ссылается на последний коммит

<p align="left">
<img src="./images/git-branch-1.png" height="200">
</p>

Ветка — это ссылка на последний коммит. Указатель HEAD ссылается на ветку, ветка ссылается на последний коммит. Ветки нужны для независимой работы разработчиков над своими зонами ответственности. Например, ваш проект имеет бэкенд и фронтенд части и, очевидно, над ними работают разные команды. В репозитории заводятся 2 разные ветки проекта: main и dev. Графически, эту структуру можно представить так:

<p align="left">
<img src="./images/git-branch-2.png" height="200">
</p>

Main — основная ветка проекта, в которой находится код рабочего (продакшн) проекта, а в ветке dev — ведется разработка нового функционала, чтобы разграничить команды, в ветке dev можно создать еще 2 ветки: frontend и backend. Теперь команды могут независимо друг от друга разрабатывать новый функционал, тестировать его, а после влить в основную ветку. Мы же сделали немного по другому: в ветке flask — мы будем разрабатывать web-часть нашего проекта, а в ветке cli — терминальную часть проекта.

Слияние веток или merge (мердж) — это создание коммита в основной ветке, который содержит ссылки на два родительских коммита: последний коммит в основной ветке и последний коммит в ветке, где разрабатывался функционал, который нужно интегрировать в основную ветку.

Графически процесс слияния веток можно представить так:

<p align="left">
<img src="./images/git-branch-3.png" height="200">
</p>

### Файл .gitignore

Все файлы в каталоге **Git** либо отслеживаются, либо не отслеживаются. Чтобы игнорировать файлы (такие как .class, .o, .exe, которые могут быть воспроизведены из исходного кода) и удалить их из списка неотслеживаемых файлов, создайте файл ".gitignore" в каталоге вашего проекта, в котором перечислены файлы, которые следует игнорировать, следующим образом:

```bash
# .gitignore

# Java class files
*.class

# Executable files
*.exe

# Object and archive files
# Can use regular expression, e.g., [oa] matches either o or a
*.[oa]

# temp sub-directory (ended with a directory separator)
temp/
```

НЕ должно быть никаких завершающих комментариев для имени файла. Вы можете использовать регулярные выражения для сопоставления шаблонов имени файла/пути, например, [oa] обозначает либо o, либо a. Вы можете переопределить правила, используя инвертированный шаблон (!), например, добавление !hello.exe включает hello.exe, хотя \*.exe исключаются.

# Основные команды Git

**Команды работы с репозиторием:**

- **git init** — инициализация репозитория;
- **git status** — просмотр актуального состояния репозитория git. Эта команда показывает, какие файлы были изменены, какие файлы находятся в индексе,
  а какие файлы вообще не трекаются гитом;
- **git add [file name]** — добавление файла или файлов в индекс, подготовка их для коммита;
- **git add .** - добавить все файлы из директории используется оператор точка;
- **git commit -m “[ message ]"** — создать коммит и указать его описание;
- **git log** — просмотреть сделанные коммиты и информацию о них;
- **git checkout [commit hash ]** — перейти в нужную версию проекта или коммит по его хешу, который отражается в выводе команды git log
- **git cat-file -t [hash git-object]** — посмотреть тип git-объекта по хешу;
- **git cat-file -p [hash git-object]** — прочитать содержимое файлов git-объектов по хешу.

**Команды работы с ветками:**

- **git branch [branch name]** — создать ветку;
- **git branch -a** — просмотреть все доступные ветки;
- **git branch -m [branch name] [branch name]** — переименовать ветку;
- **git checkout [branch name ]** — перейти в другую ветку;
- **git branch -b [branch name]** — создать новую ветку и переместиться в неё;
- **git branch -d [branch name]** — удалить ветку по имени;
- **git merge -m «commit text» [feature branch]** — слить ветки, используя стандартную стратегию git-слияния.

**Команды настройки git:**

- **git config --global init.defaultBranch [branch name]** — задать название метки по умолчанию;
- **git config --global user.name [имя пользователя]** — задать имя пользователя глобально, для всех репозиториев на локальной машине;
- **git config --global user.email [электронная почта пользователя]** — задать электронную почту пользователя глобально, для всех репозиториев на локальной машине.

### Сервисы хостинга Git репозиториев

<p align="start">
  <img src="./images/logo-GitHub.png" width="200">
  <img src="./images/logo-BitBucket.png" width="200">
  <img src="./images/logo-GitLab.png" width="200">
</p>

> репозитории на удаленных серверах

<p align="left">
  <img src="./images/git_remote-repository.png" width="400">
</p>

> локальные и удаленные репозитории

<p align="left">
  <img src="./images/local-and-remote-repo.webp" width="400">
</p>

**origin** - имя удаленного репозитория по-умолчанию

> Связь существующего локального репозитория с удаленным

```bash
git remote add origin <url>
```

> Example Add a remote repo called "origin" via "git remote add <remote-name> <remote-url>"

```bash
git remote add origin https://github.com/your-username/test.git
```

> List all remote names and their corresponding URLs

```bash
git remote -v
origin  https://github.com/your-username/test.git (fetch)
origin  https://github.com/your-username/test.git (push)
```

> Загрузка изменений из локальной ветки в удаленную с созданием связи между ними

```bash
git push -u origin <branch-name>
```

> Дальнейшие загрузки изменений в ветку удаленного репозитория после установки связи между локальной и удаленной ветками

```bash
git push
```

> Example Push all commits of the branch "master" to remote repo "origin"

```bash
git push origin master
Username for 'https://github.com': ******
Password for 'https://your-username@github.com': *******
Counting objects: 10, done.
Delta compression using up to 8 threads.
Compressing objects: 100% (10/10), done.
Writing objects: 100% (10/10), 1.13 KiB | 0 bytes/s, done.
Total 10 (delta 1), reused 0 (delta 0)
To https://github.com/your-username/test.git
 * [new branch]      master -> master
Branch master set up to track remote branch master from origin.
```

### Тегирование - Tagging

> Creating an Annotated Tag

```bash
git tag -a <tag-name> -m <message>
```

> Create an annotated tag at the latest commit

```bash
git tag -a v1.0.0 -m "First production system"
```

> List all tags

```bash
git tag
v1.0.0
```

> Show tag details

```bash
git show v1.0.0
```

```bash
git log
......
commit 7e7cb40a9340691e2b16a041f7185cee5f7ba92e
......
    Commit 3

git tag -a "v0.9.0" -m "Last pre-production release" 7e7cb40

// List all tags
git tag
v0.9.0
v1.0.0

// Show details of a tag
git show v0.9.0
......
```

> Deleting Tags

```bash
git tag -d v1.4-lw
Deleted tag 'v1.4-lw' (was e7d5add)
Note that this does not remove the tag from any remote servers. There are two common variations for deleting a tag from a remote server.

The first variation is git push <remote> :refs/tags/<tagname>:

git push origin :refs/tags/v1.4-lw
To /git@github.com:schacon/simplegit.git
 - [deleted]         v1.4-lw
The way to interpret the above is to read it as the null value before the colon is being pushed to the remote tag name, effectively deleting it.

The second (and more intuitive) way to delete a remote tag is with:

git push origin --delete <tagname>
```

> Checking out Tags

```bash
git checkout v2.0.0
Note: switching to 'v2.0.0'.

You are in 'detached HEAD' state. You can look around, make experimental
changes and commit them, and you can discard any commits you make in this
state without impacting any branches by performing another checkout.

If you want to create a new branch to retain commits you create, you may
do so (now or later) by using -c with the switch command. Example:

  git switch -c <new-branch-name>

Or undo this operation with:

  git switch -

Turn off this advice by setting config variable advice.detachedHead to false

HEAD is now at 99ada87... Merge pull request #89 from schacon/appendix-final

git checkout v2.0-beta-0.1
Previous HEAD position was 99ada87... Merge pull request #89 from schacon/appendix-final
HEAD is now at df3f601... Add atlas.json and cover image
In “detached HEAD” state, if you make changes and then create a commit, the tag will stay the same, but your new commit won’t belong to any branch and will be unreachable, except by the exact commit hash. Thus, if you need to make changes — say you’re fixing a bug on an older version, for instance — you will generally want to create a branch:

git checkout -b version2 v2.0.0
Switched to a new branch 'version2'
```
