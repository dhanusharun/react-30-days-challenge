import React, { useState, useCallback } from "react";
import { Button } from "react-bootstrap";
import HeightCounterComponent from "../component/HeightCounterComponent";
import WeightCounterComponent from "../component/WeightCounterComponent";

const Home = () => {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(1);

  const incrementHeight = useCallback(() => {
    setCount1(count1 + 1)
  }, [count1])

  const incrementWeight = useCallback(() => {
    setCount2(count2 + 1)
  }, [count2])

  return (
    <>
      <div>
        <h1><i>After Callback implementation</i></h1>
        <HeightCounterComponent CounterTitle={"Height Counter 1"} CounterCount={count1} />
        <Button onClick={incrementHeight}>Increment Height</Button>
        <WeightCounterComponent CounterTitle={"Weight Counter 2"} CounterCount={count2} />
        <Button onClick={incrementWeight}>Increment Weight</Button>
      </div>
    </>
  );
};

export default Home;
