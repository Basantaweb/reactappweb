import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import auth from "../services/authService";

export default function Admin() {
  const navigate = useNavigate();
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");

  // ✅ Prevent infinite redirection
  useEffect(() => {
    if (!auth.isLoggedIn()) {
      navigate("/");
    }
  }, []); // ✅ Only runs once when component mounts

  const addItem = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const deleteItem = (index) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="container mt-4">
      <span>Admin Panel - Manage Items</span>
      <div className="input-group mb-3">
        <input 
          type="text" 
          className="form-control" 
          placeholder="New Item" 
          value={newItem} 
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="btn btn-success" onClick={addItem}>Add</button>
      </div>
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            {item} 
            <button className="btn btn-danger btn-sm" onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
