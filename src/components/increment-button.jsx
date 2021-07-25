import React from "react";
import styles from "./increment-button.css";

const IncrementButton = ({ increment }) => {
  return (
    <button
      onClick={increment}
      className={styles.button}
      type="button"
    >
      Click me to get another cow!
    </button>
  );
};

export default IncrementButton;