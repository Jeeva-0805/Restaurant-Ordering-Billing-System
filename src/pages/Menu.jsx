import { useState } from "react";

import pizza from "../assets/pizza.jpg";
import burger from "../assets/burger.jpg";
import friedrice from "../assets/friedrice.jpg";

function Menu() {
  const [cartCount, setCartCount] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [vegOnly, setVegOnly] = useState(false);
  const [search, setSearch] = useState("");

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  const menuItems = [
    {
      name: "Pizza",
      price: 250,
      category: "Fast Food",
      veg: true,
      rating: 4.8,
      image: pizza,
      description: "Cheesy pizza loaded with toppings",
    },
    {
      name: "Burger",
      price: 150,
      category: "Fast Food",
      veg: false,
      rating: 4.7,
      image: burger,
      description: "Juicy grilled burger",
    },
    {
      name: "Fried Rice",
      price: 180,
      category: "Rice",
      veg: true,
      rating: 4.6,
      image: friedrice,
      description: "Delicious vegetable fried rice",
    },
    {
  name: "Veg Biryani",
  price: 200,
  category: "Rice",
  veg: true,
  rating: 4.5,
  image: friedrice,
  description: "Aromatic vegetable biryani",
},
{
  name: "Chicken Wrap",
  price: 170,
  category: "Fast Food",
  veg: false,
  rating: 4.6,
  image: burger,
  description: "Soft wrap with chicken filling",
},
{
  name: "Paneer Pizza",
  price: 280,
  category: "Fast Food",
  veg: true,
  rating: 4.8,
  image: pizza,
  description: "Paneer loaded cheesy pizza",
},
{
  name: "Veg Burger",
  price: 140,
  category: "Fast Food",
  veg: true,
  rating: 4.4,
  image: burger,
  description: "Fresh vegetable burger",
},
{
  name: "Mushroom Fried Rice",
  price: 210,
  category: "Rice",
  veg: true,
  rating: 4.7,
  image: friedrice,
  description: "Fried rice with mushrooms",
},
{
  name: "Chicken Pizza",
  price: 320,
  category: "Fast Food",
  veg: false,
  rating: 4.9,
  image: pizza,
  description: "Loaded chicken pizza",
},
{
  name: "French Fries",
  price: 110,
  category: "Fast Food",
  veg: true,
  rating: 4.5,
  image: burger,
  description: "Crispy golden fries",
},
{
  name: "Egg Fried Rice",
  price: 190,
  category: "Rice",
  veg: false,
  rating: 4.6,
  image: friedrice,
  description: "Fried rice with egg toppings",
},
  ];

  const filteredItems = menuItems.filter((item) => {
    const categoryMatch =
      selectedCategory === "All" ||
      item.category === selectedCategory;

    const vegMatch = !vegOnly || item.veg;

    const searchMatch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());

    return categoryMatch && vegMatch && searchMatch;
  });

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

      {/* Search */}
      <div className="mb-4">
        <input
          type="text"
          className="form-control"
          placeholder="Search Food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="row justify-content-center g-4">
        {filteredItems.map((item) => (
          <div className="col-md-4" key={item.name}>
            <div style={cardStyle}>
              <img
                src={item.image}
                alt={item.name}
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
                {item.name}
              </h3>

              <span className="badge bg-success mb-2">
                Available
              </span>

              <p>
                {item.veg
                  ? "🌱 Vegetarian"
                  : "🍗 Non-Vegetarian"}
              </p>

              <p>⭐ {item.rating} Rating</p>

              <p>{item.description}</p>

              <p>₹{item.price}</p>

              <button
                onClick={addToCart}
                className="btn btn-warning fw-bold px-4 py-2"
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
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