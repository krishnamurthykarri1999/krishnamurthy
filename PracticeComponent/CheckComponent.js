import React from "react";
import {
  ConditionalStatement1,
  ConditionalStatements2,
} from "./ConditionalStatements";

const CheckComponent = (props) => {
  const ele = props.name;

  if (ele) {
    console.log("element", ele);
    return <ConditionalStatement1 />;
  } else {
    console.log("element", ele);
    return <ConditionalStatements2 />;
  }
};

export default CheckComponent;
