# Отправка email - Send Email

## Отправка email с помощью модуля smtplib - Send Email Using smtplib Module

- Docker Desktop install.
- https://github.com/rnwood/smtp4dev?tab=readme-ov-file
- Запуск smtp4dev контейнера:
  ```bash
   docker run --rm -it -p 3000:80 -p 2525:25 rnwood/smtp4dev
   or
   docker run -d -p 80:80 -p 25:25 rnwood/smtp4dev
  ```
- localhost:3000 - веб интерфейс smtp4dev

## Компоновка и отправка email - Composing and Sending Email

## HTML шаблоны для отправки email - HTML Templates for Sending Email
