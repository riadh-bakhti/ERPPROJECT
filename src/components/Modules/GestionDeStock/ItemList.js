import React, { useState } from "react";


function ItemList({ items, removeItem }) {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
            <button onClick={() => removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    );
  }
  export default ItemList;