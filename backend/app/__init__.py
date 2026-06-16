from flask import Flask
from config import Config
from extensions import db,jwt
from routes.auth import auth_bp
def create_app():
    app=Flask(__name__)
    app.config.from_object(Config)
    db.init_app(app)
    jwt.init_app(app)
    app.register_blueprint(auth_bp)
    @app.route('/')
    def home():
        return 'Welcome to the Restaurant Ordering and Billing System!'
   
    return app