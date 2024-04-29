import "./rendering-lists.css";
import { shoppingList } from "../constants.js";
import { useState } from "react";

// A reusable list component that takes a function as a prop
const ListItem = ({ item, color, onRemove }) => {
  const [count, setCount] = useState(0);
  return (
    <li className={"list-item"} style={{ color: `var(--${color}-12)` }}>
      <div className={"li-container"}>
        {item}&nbsp;-&nbsp;{count}
        <span>
          <button
            className={"button"}
            aria-label={"Increment item"}
            onClick={() => setCount((c) => c + 1)}
          >
            +
          </button>
          <button
            className={"button"}
            aria-label={"decrement item"}
            onClick={() => setCount((c) => c - 1)}
          >
            -
          </button>
          <button
            className={"button"}
            aria-label={"remove this item"}
            style={{
              color: `var(--red-10)`,
              outline: `1px var(--red-10) solid`,
            }}
            // If onRemove is a function, call it
            onClick={() => typeof onRemove === "function" && onRemove(item)}
          >
            x
          </button>
        </span>
      </div>
    </li>
  );
};

const Interactivity = ({ items = shoppingList }) => {
  // Store the items prop as state, so we can manipulate it, as the data flow is top-down
  const [shopping, setShopping] = useState(items);
  return (
    <div>
      <h4 className={"rendering-lists"}>Item List</h4>
      <ul className={"list"}>
        {shopping.map((props) => (
          <ListItem
            /* The item name the key, what happens if we remove this and try to remove an element from the parent? */
            key={props.item.replaceAll(/\s/gm, "-")}
            {...props}
            onRemove={(item) =>
              setShopping((s) => {
                // We are just using the "filter" method from JS
                return s.filter((i) => i.item !== item);
              })
            }
          />
        ))}
      </ul>
      <button
        style={{
          height: "auto",
          width: "auto",
        }}
        className={"button"}
        // Just setting the array to its original prop
        onClick={() => setShopping(items)}
      >
        Reset
      </button>
    </div>
  );
};

export default Interactivity;
