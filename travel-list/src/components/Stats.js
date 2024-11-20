export default function Stats({ items }) {
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
