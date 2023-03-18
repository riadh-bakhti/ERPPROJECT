import React, { useState } from "react";
import AddItemForm from "./AddItemForm";
import ItemList from "./ItemList";

function StockManagement() {
  const [items, setItems] = useState([]);

  function addItem(newItem) {
    setItems([...items, newItem]);
  }

  function removeItem(index) {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  }

  return (
    <div>
      <h2>Stock Management System</h2>
      <AddItemForm addItem={addItem} />
      <ItemList items={items} removeItem={removeItem} />
    </div>
  );
}
export default StockManagement;