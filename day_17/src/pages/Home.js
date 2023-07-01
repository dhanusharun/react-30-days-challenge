import React from "react";
import CalendarComponent from "../component/CalendarComponent";
import { Container } from "react-bootstrap";


const Home = () => {
  return (
    <>
      <Container className="main-wrapper">
        <CalendarComponent />
      </Container>
    </>
  );
};

export default Home;
