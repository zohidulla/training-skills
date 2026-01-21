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

```python
from email.message import EmailMessage
import smtplib

my_email = EmailMessage()

my_email['from'] = 'Alice'
my_email['to'] = 'test@gmail.com'
my_email['subject'] = 'Hello from Python'
my_email.set_content('This is a test email sent from a Python script!')

with smtplib.SMTP(host='localhost', port=2525) as smtp_server:
    smtp_server.ehlo()
    smtp_server.send_message(my_email)
    print("Email sent successfully!")
```

## HTML шаблоны для отправки email - HTML Templates for Sending Email

```python
from email.message import EmailMessage
import smtplib
from string import Template
from pathlib import Path

my_email = EmailMessage()

script_dir = Path(__file__).parent
html_template = Template((script_dir / 'template' / 'index.html').read_text())
html_content = html_template.substitute({'name':'Alice', 'company':'Wonderland Inc.'})

my_email['from'] = 'Alice'
my_email['to'] = 'alice@gmail.com'
my_email['subject'] = 'Let\'s test sending an email with Python!'
my_email.add_alternative(html_content, 'html')

with smtplib.SMTP(host='localhost', port=2525) as smtp_server:
    smtp_server.ehlo()
    smtp_server.send_message(my_email)
    print("Email sent successfully!")
```

## Отправка вложений в email - Sending Attachments in Email

```python
from email.message import EmailMessage
import smtplib
from string import Template
from pathlib import Path

my_email = EmailMessage()

script_dir = Path(__file__).parent
html_template = Template((script_dir / 'template' / 'index.html').read_text())
html_content = html_template.substitute({'name':'Bob', 'company':'Wonderland Inc.'})

my_email['from'] = 'Bob'
my_email['to'] = 'bob@gmail.com'
my_email['subject'] = 'A Warm Welcome!'
my_email.add_alternative(html_content, 'html')

with open(script_dir / 'images' / 'email.gif', 'rb') as img:
    my_email.add_attachment(img.read(), maintype='image', subtype='gif', filename='email.gif')

with smtplib.SMTP(host='localhost', port=2525) as smtp_server:
    smtp_server.ehlo()
    smtp_server.send_message(my_email)
    print("Email sent successfully!")
```
