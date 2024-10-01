// import React, { useEffect, useState, useRef } from "react";

// export const UseEffects = () => {
//   const [count, setCount] = useState(0);
//   const effectCallCount = useRef(0); // To count the number of useEffect calls

//   useEffect(() => {
//     // Increment the counter each time useEffect runs
//     effectCallCount.current += 1;

//     // Log how many times useEffect has been called
//     console.log(
//       "useEffect has been called: " + effectCallCount.current + " times"
//     );

//     console.log("Phase 1 useEffect: count = " + count);

//     // Simulate an interval
//     let timeInterval = setTimeout(() => {
//       setCount(count + 1);
//     }, 1000);

//     console.log("Phase 2 useEffect: count = " + count);

//     return () => clearInterval(timeInterval);
//   }, []); // Added count as a dependency to ensure useEffect runs on count change

//   return <h1>I've Rendered {count} times!... </h1>;
// };
