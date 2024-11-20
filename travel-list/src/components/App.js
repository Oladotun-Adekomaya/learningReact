import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

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
