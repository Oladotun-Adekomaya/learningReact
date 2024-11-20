import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Boxers", quantity: 9, packed: true },
  { id: 4, description: "Milo", quantity: 7, packed: false },
  { id: 5, description: "shoes", quantity: 10, packed: true },
];

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

function Logo() {
  return <h1> Far Away</h1>;
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItem);

    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}

function PackingList({
  items,
  onDeleteItems,
  onToggleCheck,
  onDeleteAllItems,
}) {
  const [sortValue, setSortValue] = useState("chronological");
  const sortItems = items;
  const sortAlphabeticalItems = sortItems
    .slice()
    .sort((a, b) => String(a.description).localeCompare(String(b.description)));
  const sortPackedItems = sortItems.slice().sort((a, b) => (a.packed ? 1 : -1));

  let check =
    sortValue === "chronological"
      ? sortItems
      : sortValue === "alphabetical"
      ? sortAlphabeticalItems
      : sortPackedItems;
  console.log(check);

  return (
    <div className="list">
      <ul>
        {check.map((item) => {
          return (
            <Item
              item={item}
              key={item.id}
              onDeleteItems={onDeleteItems}
              onToggleCheck={onToggleCheck}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select
          name=""
          id=""
          value={sortValue}
          onChange={(e) => setSortValue(e.target.value)}
        >
          <option value="chronological">Sort by Item Added</option>
          <option value="alphabetical">Sort Alphabetically</option>
          <option value="bypacked"> Sort by Packed</option>
        </select>
        <button onClick={onDeleteAllItems}>Clear List</button>
      </div>
    </div>
  );
}

function Item({ item, onDeleteItems, onToggleCheck }) {
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
