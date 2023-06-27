import React, { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import axios from "axios";

const Home = () => {
  const [quote, setQuote] = useState("Welcome to my 30 days challenge !!");
  const [quoteArr, setQuoteArr] = useState([]);

  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((response) => {
        setQuoteArr(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = () => {
    const min = 1;
    const max = 500;
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    setQuote(quoteArr[randomNumber].text);
  };

  return (
    <div className="main-wrapper">
      <Row className="d-flex justify-content-center align-items-center">
        <Col lg="12">
          <h1>{quote}</h1>
        </Col>
        <Col lg="12">
          <button onClick={handleClick}>Generate Other</button>
        </Col>
        <Col lg="12">
          <button onClick={() => setQuote("")}>clear</button>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
