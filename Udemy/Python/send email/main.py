from email.message import EmailMessage
import smtplib

my_email = EmailMessage()

my_email['from'] = 'Alice'
my_email['to'] = 'test@gmail.com'
my_email['subject'] = 'Hello from Python'
my_email.set_content('This is a test email sent from a Python script!')

with smtplib.SMTP(host='localhost', port=2525) as smtp_server:
    smtp_server.ehlo()
    # smtp_server.starttls()
    # smtp_server.login('username', 'password')
    smtp_server.send_message(my_email)
    print("Email sent successfully!")