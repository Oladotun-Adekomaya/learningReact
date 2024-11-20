import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";

export default function App() {
  const [items, setItems] = useState([]);
  // const [packed, setPacked ] = useState(false)

  const handleAddItems = (item) => setItems([...items, item]);

  const handleDeleteItems = (id) => {
    const newItems = items.filter((curItem) => {
      return curItem.id !== id;
    });
    setItems(newItems);
  };

  const handleDeleteAllItems = () => {
    const confirmed = window.confirm(
      "Are you sure ou want to delete all items"
    );
    if (confirmed) setItems([]);
  };

  const handleToggleCheck = (id, packedVariable) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, packed: packedVariable } : item
    );
    setItems(updatedItems);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleCheck={handleToggleCheck}
        onDeleteAllItems={handleDeleteAllItems}
      />
      <Stats items={items} />
    </div>
  );
}

export function Item({ item, onDeleteItems, onToggleCheck }) {
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

function Stats({ items }) {
  const numItems = items.length;
  const packedItems = items.reduce((accumulator, item) => {
    return item.packed === true ? (accumulator += 1) : accumulator;
  }, 0);
  const percentagePacked = Math.round((packedItems / numItems) * 100);

  if (numItems === 0) {
    return (
      <footer className="stats">
        <em> Add an item to the list.</em>
      </footer>
    );
  }

  return (
    <footer className="stats">
      {percentagePacked !== 100 ? (
        <em>
          You have {numItems} items on your list, and you already packed{" "}
          {packedItems} {`(${percentagePacked}%)`}
        </em>
      ) : (
        <em>You are ready to go</em>
      )}
    </footer>
  );
}
