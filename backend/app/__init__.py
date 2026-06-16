from flask import Flask
from config import Config
from extensions import db,jwt

def create_app():
    app=Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    jwt.init_app(app)
    @app.route('/')
    def home():
        return 'Welcome to the Restaurant Ordering and Billing System!'
    
    return app