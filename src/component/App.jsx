import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import "./travel.css";

export default function App() {
  const [items, setItems] = useState([]);
  //  create a state of items and setItems.
  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    // delete the item based on the id that matched on the item.id on the handleDeleteItem
  }
  // pass the handleDeleteItem as a prop in the onHandleDelete attribute.

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
    // HandleToggle toggles the item in the item.packed that item.packed is being switched from true to false and vice a versa.
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    ); // confirms the window.confirm with a message such as this 

    if (confirmed) setItems([]);
    //  This clears the list.
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      {/* The attributes in the PackingList are */}
      <Stats items={items} />
    </div>
  );
}
// To move a function to a new file : right click then click on Refactor -> move to a new file

