import React from "react";

const HeightCounterComponent = (props) => {
  console.log("Height Component rendered !");
  return (
    <div><h1>{props.CounterTitle} : {props.CounterCount}</h1></div>
  );
};

export default React.memo(HeightCounterComponent);