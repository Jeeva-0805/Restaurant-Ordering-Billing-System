class Config:
    SECRET_KEY = "restaurant-secret-key"
    JWT_SECRET_KEY = "jwt-secret-key"
    
    SQLALCHEMY_DATABASE_URI = "sqlite:///restaurant.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
   