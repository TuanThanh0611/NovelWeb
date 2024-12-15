import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from app.config import SMTP_CONFIG

def send_email(email: str, username: str):
    smtp_server = SMTP_CONFIG["SMTP_SERVER"]
    smtp_port = SMTP_CONFIG["SMTP_PORT"]
    sender_email = SMTP_CONFIG["SMTP_USERNAME"]
    sender_password = SMTP_CONFIG["SMTP_PASSWORD"]

    # Nội dung email
    subject = "Welcome to Our Platform"
    body = f"""
    Hi {username},

    Welcome to our platform! Your account has been successfully created.

    Best regards,
    The Team
    """
    message = MIMEMultipart()
    message["From"] = sender_email
    message["To"] = email
    message["Subject"] = subject
    message.attach(MIMEText(body, "plain"))

    # Gửi email
    with smtplib.SMTP(smtp_server, smtp_port) as server:
        server.starttls()  # Kích hoạt TLS
        server.login(sender_email, sender_password)
        server.sendmail(sender_email, email, message.as_string())
