import { useState } from "react";
import Item from "./Item";
import PropTypes from "prop-types"
export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
    PackingList.propTypes ={
        items: PropTypes.array,
  onDeleteItem: PropTypes.func,
  onToggleItem: PropTypes.func,
  onClearList: PropTypes.func
    }
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
// Sort alphabetically using a.description.localCompare(b.description)
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
        // Compare boolean convert to number
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            key={item.id}
          />
        ))}
      </ul>
        {/* SortyBy which chooses between 3 options input order then descriptions and then packed,  */}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearList}>Clear list</button>
      </div>
    </div>
  );
}
