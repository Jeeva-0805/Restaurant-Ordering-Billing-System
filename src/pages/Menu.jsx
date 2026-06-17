import { useState } from "react";
import pizza from "../assets/pizza.jpg";
import burger from "../assets/burger.jpg";
import friedrice from "../assets/friedrice.jpg";

function Menu() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [vegOnly, setVegOnly] = useState(false);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const cardStyle = {
    background: "rgba(0,0,0,0.25)",
    borderRadius: "20px",
    padding: "20px",
    color: "white",
    boxShadow: "0 0 20px rgba(255,215,0,0.25)",
    border: "1px solid rgba(255,215,0,0.4)",
  };

  return (
    <div
      className="container text-center mt-4"
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(15px)",
        borderRadius: "20px",
        padding: "30px",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      }}
    >
      <h1
        style={{
          color: "#FFD700",
          fontWeight: "bold",
          textShadow: "0 0 15px rgba(255,215,0,0.6)",
        }}
      >
        🍽️ Restaurant Menu
      </h1>

      {/* Category Filters */}
      <div className="mb-4 mt-4">
        <button
          className="btn btn-warning me-2"
          onClick={() => setSelectedCategory("All")}
        >
          All
        </button>

        <button
          className="btn btn-outline-warning me-2"
          onClick={() => setSelectedCategory("Fast Food")}
        >
          Fast Food
        </button>

        <button
          className="btn btn-outline-warning"
          onClick={() => setSelectedCategory("Rice")}
        >
          Rice
        </button>
      </div>

      {/* Veg Filter */}
      <button
        className="btn btn-success mb-4"
        onClick={() => setVegOnly(!vegOnly)}
      >
        {vegOnly ? "Show All Items" : "Vegetarian Only"}
      </button>

      <div className="row justify-content-center g-4">

        {/* Pizza (Veg) */}
        {(selectedCategory === "All" ||
          selectedCategory === "Fast Food") && (
          <div className="col-md-4">
            <div style={cardStyle}>
              <img
                src={pizza}
                alt="Pizza"
                className="img-fluid"
                style={{
                  borderRadius: "15px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <h3
                style={{
                  marginTop: "15px",
                  color: "#FFD700",
                }}
              >
                Pizza
              </h3>

              <span className="badge bg-success mb-2">
                Available
              </span>

              <p>🌱 Vegetarian</p>
              <p>⭐ 4.8 Rating</p>
              <p>Cheesy pizza loaded with fresh toppings.</p>
              <p>₹250</p>

              <button
                onClick={addToCart}
                className="btn btn-warning fw-bold px-4 py-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}

        {/* Burger (Non Veg) */}
        {(selectedCategory === "All" ||
          selectedCategory === "Fast Food") &&
          !vegOnly && (
          <div className="col-md-4">
            <div style={cardStyle}>
              <img
                src={burger}
                alt="Burger"
                className="img-fluid"
                style={{
                  borderRadius: "15px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <h3
                style={{
                  marginTop: "15px",
                  color: "#FFD700",
                }}
              >
                Burger
              </h3>

              <span className="badge bg-success mb-2">
                Available
              </span>

              <p>🍗 Non-Vegetarian</p>
              <p>⭐ 4.7 Rating</p>
              <p>Juicy grilled burger with cheese and veggies.</p>
              <p>₹150</p>

              <button
                onClick={addToCart}
                className="btn btn-warning fw-bold px-4 py-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}

        {/* Fried Rice (Veg) */}
        {(selectedCategory === "All" ||
          selectedCategory === "Rice") && (
          <div className="col-md-4">
            <div style={cardStyle}>
              <img
                src={friedrice}
                alt="Fried Rice"
                className="img-fluid"
                style={{
                  borderRadius: "15px",
                  height: "200px",
                  objectFit: "cover",
                }}
              />

              <h3
                style={{
                  marginTop: "15px",
                  color: "#FFD700",
                }}
              >
                Fried Rice
              </h3>

              <span className="badge bg-success mb-2">
                Available
              </span>

              <p>🌱 Vegetarian</p>
              <p>⭐ 4.6 Rating</p>
              <p>Delicious fried rice with vegetables and spices.</p>
              <p>₹180</p>

              <button
                onClick={addToCart}
                className="btn btn-warning fw-bold px-4 py-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        )}
      </div>

      <h2
        className="mt-5"
        style={{
          color: "#FFD700",
          textShadow: "0 0 10px rgba(255,215,0,0.5)",
        }}
      >
        🛒 Items in Cart: {cartCount}
      </h2>
    </div>
  );
}

export default Menu;