from app import create_app
from extensions import db
from models.user import User  


app = create_app()
with app.app_context():
    db.create_all()  # Create tables if they don't exist



if __name__ == '__main__':
    app.run(debug=True)
