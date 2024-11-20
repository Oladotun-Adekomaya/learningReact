import { useState } from "react";

export default function Item({ item, onDeleteItems, onToggleCheck }) {
  const [packedVar, setPacked] = useState(false);

  const handleIsPacked = (e) => {
    setPacked(e.target.checked);
    onToggleCheck(item.id, !packedVar);
  };

  return (
    <li>
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox"
        value={item.packed}
        onChange={handleIsPacked}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button style={{ color: "red" }} onClick={() => onDeleteItems(item.id)}>
        &times;
      </button>
    </li>
  );
}
