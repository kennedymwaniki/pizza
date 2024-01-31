import React, { useState } from "react";
// import './App.css';

function Apps() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  function handleAddItem() {
    const newItem = { itemName, quantity };
    setItems((prevItems) => [...prevItems, newItem]);
    setItemName("");
    setQuantity("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleAddItem();
  }

  function Delete() {
    setItemName((item) => item.filter(item));
  }
  return (
    <div className="shopping">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Item Name"
          value={itemName}
          onChange={(e) => setItemName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <div>
        <h2>Shopping List items</h2>
        <ol>
          {items.map((item, index) => (
            <li key={index}>
              {item.itemName} - {item.quantity}{" "}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Apps;
