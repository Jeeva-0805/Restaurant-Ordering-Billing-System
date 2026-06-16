from flask import Blueprint, request
from models.user import User
from extensions import db
from flask_jwt_extended import (create_access_token,jwt_required,get_jwt_identity)

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
    
    user = User(
        name=name,
        email=email,
        password=password,
        role="customer")
    db.session.add(user)
    db.session.commit()
    return {"message": "User registered successfully"}, 201

@auth_bp.route("/login", methods=["POST"])
def login():

    data = request.get_json()
    
    if not data:
        return {"message": "No data provided"}, 400


    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return {"message": "Email and password are required"}, 400

    user = User.query.filter_by(email=email).first()

    if not user:
        return {"message": "Invalid credentials"}, 401

    if user.password != password:
        return {"message": "Invalid credentials"}, 401

    access_token = create_access_token(identity=str(user.id))

    return {
        "access_token": access_token
    }, 200

@auth_bp.route("/profile", methods=["GET"])
@jwt_required()
def profile():
    user_id = get_jwt_identity()
    return{
        "message": "Protected route accessed",
        "user_id": user_id
    }