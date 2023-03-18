import React, { useState } from "react";


function AddItemForm({ addItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState("");
  
    function handleSubmit(e) {
      e.preventDefault();
      addItem({ name, quantity: Number(quantity) });
      setName("");
      setQuantity("");
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Quantity:
          <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
        </label>
        <button type="submit">Add Item</button>
      </form>
    );
  }
  export default AddItemForm;