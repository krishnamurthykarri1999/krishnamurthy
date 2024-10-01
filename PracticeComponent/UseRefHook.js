import React, { useEffect, useRef, useState } from "react";

export const UseRefHook = () => {
  const [count, setCount] = useState(0);
  const renderCount = useRef(0); // Initializing useRef to keep track of render count
  const isFirstRender = useRef(true); // Track if it's the first render

  const incrementCount = () => {
    setCount(count + 1); // Updating state
    renderCount.current += 1; // Updating ref value without causing re-render
  };

  useEffect(() => {
    if (isFirstRender.current) {
      console.log("UseRef is InitialRender");
      isFirstRender.current = false;
    } else {
      console.log(`UseRef is not re rendering`);
    }
  });

  return (
    <div>
      <h2>State Count: {count}</h2>
      <h2>Render Count: {renderCount.current}</h2>
      <button onClick={incrementCount}>Increment Count</button>
    </div>
  );
};
