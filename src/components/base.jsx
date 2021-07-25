import React, { useState, useEffect } from "react";
import IncrementButton from "./increment-button"
import Counter from "./counter"
import Pasture from "./pasture"
import { increaseCount, fetchCount } from "../utils";

import styles from "./base.css";

const Base = () => {
  const [count, setCount] = useState(0)
  const [isLoading, setIsLoading] = useState(false)

  const waitOnApiCall = async (apiCall) => {
    setIsLoading(true);
    const newCount = (await apiCall()).value
    setCount(newCount)
    setIsLoading(false)
  }

  const handleIncrementClick = () => waitOnApiCall(increaseCount)

  const updateCountState = () => waitOnApiCall(fetchCount)

  useEffect(() => {
    updateCountState()
  }, [])

  return (
    <div className={styles.base}>
      <div className={styles.upperContent}>
        <IncrementButton increment={handleIncrementClick} />
        <Counter count={count} isLoading={isLoading} />
      </div>
      <Pasture cowCount={count} />
    </div>
  );
};

export default Base;