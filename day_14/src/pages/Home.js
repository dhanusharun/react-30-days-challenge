import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "react-bootstrap";

const Home = () => {
  const [color, setColor] = useState("");
  // Declaring the ref using useRef, does not cause a re-render when updated
  const previousColor = useRef("");

  useEffect(() => {
    previousColor.current = color;
  }, [color]);

  return (
    <>
      <label>Chose color</label>
      <input
        type="color"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      ></input>
      <div className="main-wrapper">
        <Row>
          <Col>
            <h1 style={{ color: color }}>Current Color : {color}</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 style={{ color: previousColor.current }}>
              Previous Color : {previousColor.current}
            </h1>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Home;
