import React from "react";

const DeclarativeApi = () => {
  // We are creating an element, similarly to what we would use with plain Javascript
  const p = React.createElement(
    "p",
    {
      style: {
        color: "red",
      },
    },
    "I am an element",
  );

  // What if we want a button?
  const button = React.createElement(
    "button",
    {
      onClick: () => alert("Hi I am the button"),
      style: {
        padding: "1rem",
        border: "1px solid black",
        cursor: "pointer",
      },
      type: "button",
    },
    "click me",
  );
  // What if we want to add the above as children of something else?
  const parent = React.createElement(
    "div",
    {
      style: {
        border: "1px solid red",
      },
      "aria-hidden": true,
    },
    p,
    button,
  );
  // Can you create a reusable function for the button above? Try to make it, so it receives a "label" text, a type
  // and an onClick handler (psst a button can be of type "button" or "submit"
  return parent;
};

export default DeclarativeApi;
