import React from "react";

const IncrementButton = ({ increment }) => {
  return (
    <button
      onClick={increment}
    >
      Click me!
    </button>
  );
};

export default IncrementButton;