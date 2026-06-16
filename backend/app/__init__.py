from flask import Flask

def create_app():
    app=Flask(__name__)

    @app.route('/')
    def home():
        return 'Welcome to the Restaurant Ordering and Billing System!'
    
    return app