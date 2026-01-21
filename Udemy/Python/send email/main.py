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
# my_email.set_content('This is a test email sent from a Python script!')
my_email.add_alternative(html_content, 'html')

with open(script_dir / 'images' / 'email.gif', 'rb') as img:
    my_email.add_attachment(img.read(), maintype='image', subtype='gif', filename='email.gif')

with smtplib.SMTP(host='localhost', port=2525) as smtp_server:
    smtp_server.ehlo()
    # smtp_server.starttls()
    # smtp_server.login('username', 'password')
    smtp_server.send_message(my_email)
    print("Email sent successfully!")