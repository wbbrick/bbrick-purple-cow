import React from "react";

const Counter = ({ count, isLoading }) => {
  if(isLoading) {
    return (
      <div>...</div>
    )
  }
  return (
    <div>{count}</div>
  )
}

export default Counter