from flask import Blueprint, request
from models.user import User
from extensions import db

auth_bp = Blueprint("auth", __name__)

@auth_bp.route("/api/test")
def test():
    return {"message": "Auth route working"}

@auth_bp.route("/register", methods=["POST"])
def register():
    data=request.get_json()
    if not data:
        return {"message": "No data provided"}, 400

    name=data.get("name")
    email=data.get("email")
    password=data.get("password")
    if not name or not email or not password:
        return {"message": "All fields are required"}, 400

    existing_user=User.query.filter_by(email=email).first()
    if existing_user:
        return {"message": "User already exists"}, 400
    
    user=User(
        name=name,
        email=email,
        password=password,
        role="customer")
    db.session.add(user)
    db.session.commit()
    return {"message": "User registered successfully"}, 201