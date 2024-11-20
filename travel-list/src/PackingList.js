import { useState } from "react";
import { Item } from "./App";

export function PackingList({
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
