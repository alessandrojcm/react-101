import "./rendering-lists.css";
// import {shoppingList} from "../constants.js";

const RenderingLists = ({ items = [] }) => {
  return (
    <div className={"rendering-lists"}>
      <h4>List of items</h4>
      {/*  JSX allows us to use conditionals inside javascript*/}
      {items.length === 0 ? (
        <p>No items</p>
      ) : (
        <ul className={"list"}>
          {/*  We can iterate through the list of items! And even use their props to style them*/}
          {/*  Can you figure out why the warning in the console? */}
          {/* Can you make this little li snippet to be a component? */}
          {items.map(({ item, color }) => (
            <li className={"list-item"} style={{ color: `var(--${color}-12)` }}>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RenderingLists;
