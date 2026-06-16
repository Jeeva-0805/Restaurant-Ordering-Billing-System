from extensions import db
from models.user import User

def seed_admin():
    admin=User.query.filter_by(email='admin@restaurant.com').first()

    if not admin:
        admin=User(
            name="Admin",
            email="admin@restaurant.com",
            password="admin123",
            role="admin",
        )
        db.session.add(admin)
        db.session.commit()

        print("Admin user created successfully.")
    else:
        print("Admin user already exists.")
        