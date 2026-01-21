from email.message import EmailMessage
import smtplib
from string import Template
from pathlib import Path

my_email = EmailMessage()

# Get the directory where this script is located
script_dir = Path(__file__).parent
html_template = Template((script_dir / 'template' / 'index.html').read_text())
html_content = html_template.substitute({'name':'Alice', 'company':'Wonderland Inc.'})

my_email['from'] = 'Alice'
my_email['to'] = 'alice@gmail.com'
my_email['subject'] = 'Let\'s test sending an email with Python!'
# my_email.set_content('This is a test email sent from a Python script!')
my_email.add_alternative(html_content, 'html')

with smtplib.SMTP(host='localhost', port=2525) as smtp_server:
    smtp_server.ehlo()
    # smtp_server.starttls()
    # smtp_server.login('username', 'password')
    smtp_server.send_message(my_email)
    print("Email sent successfully!")