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
            <option value="Fast Food">Fast Food</option>
            <option value="Rice">Rice</option>
            <option value="Dessert">Dessert</option>
            <option value="Beverage">Beverage</option>
            </select>

        <button
          className="btn btn-warning fw-bold"
          onClick={addItem}
        >
          Add Item
        </button>
      </div>

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

      {/* Table */}
      <table className="table table-dark table-striped text-center">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Category</th>
            <th>Status</th>
            <th style={{ width: "300px" }}>
              Actions
            </th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
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
                    Toggle
                  </button>

                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      deleteItem(item.id)
                    }
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