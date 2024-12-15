from fastapi import FastAPI, HTTPException
from app.email_service import send_email
from app.model import EmailRequest

app = FastAPI()

@app.post("/send-email")
async def send_email_endpoint(request: EmailRequest):
    try:
        send_email(request.email, request.username)
        return {"status": "success", "message": f"Email sent to {request.email}"}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))