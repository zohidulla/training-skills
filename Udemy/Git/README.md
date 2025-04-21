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

> Рабочая директория - working directory

<p align="left">
<img src="./images/working-directory-git.jpg" height="500">
</p>

> Индекс - staging area

<p align="left">
<img src="./images/staging-area.webp" height="200">
</p>
