import { useState } from "react";

function AdminMenu() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Pizza",
      price: 250,
      category: "Fast Food",
      available: true,
    },
    {
      id: 2,
      name: "Burger",
      price: 150,
      category: "Fast Food",
      available: true,
    },
    {
      id: 3,
      name: "Fried Rice",
      price: 180,
      category: "Rice",
      available: true,
    },
  ]);

  const [name, setName] = useState("");
const [price, setPrice] = useState("");
const [category, setCategory] = useState("");

const [categories, setCategories] = useState([
  "Fast Food",
  "Rice",
  "Dessert",
  "Beverage",
]);

const [newCategory, setNewCategory] = useState("");

const [search, setSearch] = useState("");

const [editId, setEditId] = useState(null);
  const [editName, setEditName] = useState("");
  const [editPrice, setEditPrice] = useState("");

  const addItem = () => {
    if (!name || !price || !category) {
      alert("Please fill all fields");
      return;
    }

    const newItem = {
      id: Date.now(),
      name,
      price,
      category,
      available: true,
    };

    setItems([...items, newItem]);

    setName("");
    setPrice("");
    setCategory("");
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const toggleAvailability = (id) => {
    setItems(
      items.map((item) =>
        item.id === id
          ? { ...item, available: !item.available }
          : item
      )
    );
  };

  const saveEdit = () => {
    setItems(
      items.map((item) =>
        item.id === editId
          ? {
              ...item,
              name: editName,
              price: editPrice,
            }
          : item
      )
    );

    setEditId(null);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const addCategory = () => {
  if (!newCategory) return;

  setCategories([...categories, newCategory]);
  setNewCategory("");
};

const deleteCategory = (categoryName) => {
  setCategories(
    categories.filter(
      (cat) => cat !== categoryName
    )
  );
};

  return (
    <div
      className="container mt-4"
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(15px)",
        borderRadius: "20px",
        padding: "30px",
      }}
    >
      <h1
        className="text-center mb-4"
        style={{
          color: "#FFD700",
          fontWeight: "bold",
          textShadow: "0 0 15px rgba(255,215,0,0.6)",
        }}
      >
        🍽️ Admin Menu Management
      </h1>

      {/* Statistics Cards */}
      <div className="row mb-4">
        <div className="col-md-4">
          <div className="card bg-warning text-dark p-3">
            <h5>Total Items</h5>
            <h2>{items.length}</h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-success text-white p-3">
            <h5>Available</h5>
            <h2>
              {items.filter((item) => item.available).length}
            </h2>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card bg-danger text-white p-3">
            <h5>Unavailable</h5>
            <h2>
              {items.filter((item) => !item.available).length}
            </h2>
          </div>
        </div>
      </div>

      <h3 className="text-warning mb-3">
  Category Management
</h3>

<div className="card bg-dark p-3 mb-4">
  <ul className="list-group">
    <li className="list-group-item">
      Fast Food
    </li>
    <li className="list-group-item">
      Rice
    </li>
    <li className="list-group-item">
      Dessert
    </li>
    <li className="list-group-item">
      Beverage
    </li>
  </ul>
</div>
        <div className="card bg-dark p-4 mb-4">
  <h4 className="text-warning mb-3">
    📂 Category Management
  </h4>

  <div className="d-flex gap-2 mb-3">
    <input
      className="form-control"
      placeholder="New Category"
      value={newCategory}
      onChange={(e) =>
        setNewCategory(e.target.value)
      }
    />

    <button
      className="btn btn-warning"
      onClick={addCategory}
    >
      Add
    </button>
  </div>

  {categories.map((cat) => (
    <div
      key={cat}
      className="d-flex justify-content-between align-items-center bg-secondary p-2 rounded mb-2"
    >
      <span>{cat}</span>

      <button
        className="btn btn-sm btn-danger"
        onClick={() => deleteCategory(cat)}
      >
        Delete
      </button>
    </div>
  ))}
</div>
      {/* Add Item Form */}
      <div className="card bg-dark p-4 mb-4">
        <input
          className="form-control mb-3"
          placeholder="Food Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="form-control mb-3"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <select
          className="form-control mb-3"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
  <option key={cat} value={cat}>
    {cat}
  </option>
))}
        </select>

        <button
          className="btn btn-warning fw-bold"
          onClick={addItem}
        >
          Add Item
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search Food Item..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Edit Form */}
      {editId && (
        <div className="card bg-dark p-4 mb-4">
          <h4 className="text-warning mb-3">
            Edit Item
          </h4>

          <input
            className="form-control mb-3"
            value={editName}
            onChange={(e) =>
              setEditName(e.target.value)
            }
          />

          <input
            className="form-control mb-3"
            value={editPrice}
            onChange={(e) =>
              setEditPrice(e.target.value)
            }
          />

          <button
            className="btn btn-success"
            onClick={saveEdit}
          >
            Save Changes
          </button>
        </div>
      )}

      <table className="table table-dark table-striped text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Status</th>
            <th style={{ width: "320px" }}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {filteredItems.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>

              <td>₹{item.price}</td>

              <td>{item.category}</td>

              <td>
                {item.available ? (
                  <span className="badge bg-success">
                    Available
                  </span>
                ) : (
                  <span className="badge bg-danger">
                    Unavailable
                  </span>
                )}
              </td>

              <td>
                <div className="d-flex justify-content-center gap-2">
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      setEditId(item.id);
                      setEditName(item.name);
                      setEditPrice(item.price);
                    }}
                  >
                    Edit
                  </button>

                  <button
                    className={
                      item.available
                        ? "btn btn-success"
                        : "btn btn-secondary"
                    }
                    onClick={() =>
                      toggleAvailability(item.id)
                    }
                  >
                    {item.available
                      ? "Disable"
                      : "Enable"}
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() => {
                      if (
                        window.confirm(
                          "Delete this item?"
                        )
                      ) {
                        deleteItem(item.id);
                      }
                    }}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminMenu;