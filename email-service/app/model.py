from pydantic import BaseModel, EmailStr

class EmailRequest(BaseModel):
    email: EmailStr
    username: str
