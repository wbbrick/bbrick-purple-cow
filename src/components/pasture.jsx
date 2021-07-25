import React from "react";
import styles from "./pasture.css";

const Pasture = ({ cowCount }) => {
  return (
    <div className={styles.cowpen}>
      {
        [...Array(cowCount).keys()].map((k, idx) => (
          <span key={idx} className={styles.cow}>
            🐄
          </span>
        ))
      }
    </div>
  );
};

export default Pasture;