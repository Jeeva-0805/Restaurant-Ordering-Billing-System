from app import create_app
from extensions import db
from models.user import User  
from seed import seed_admin

app = create_app()
with app.app_context():
    db.create_all()  # Create tables if they don't exist
    seed_admin()  # Seed the admin user
if __name__ == '__main__':
    app.run(debug=True)
