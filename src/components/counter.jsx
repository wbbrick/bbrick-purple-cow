import React from "react";
import styles from "./counter.css";

const Counter = ({ count, isLoading }) => {
  const content = isLoading ? (
    <div className={styles.spinner}>߷</div>
  ) : (
    <div className={styles.counter}>{count}</div>
  );

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Total cows:</h2>
      {content}
    </div>
  );
};

export default Counter;