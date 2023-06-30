import React from "react";

const WeightCounterComponent = (props) => {
  console.log("Weight Component rendered !");
  return (
    <div><h1>{props.CounterTitle} : {props.CounterCount}</h1></div>
  );
};

export default React.memo(WeightCounterComponent);