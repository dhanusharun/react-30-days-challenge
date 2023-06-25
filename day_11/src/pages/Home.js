import React from "react";
import ResultComponent from "../components/ResultComponent";
import SummaryComponent from "../components/SummaryComponent";
import { Col, Row } from "react-bootstrap";

const Home = () => {
  return (
      <>
      <div className="container d-flex justify-content-center align-item-center main-container">
        <Row className="justify-content-md-center">
          <Col lg="6">
              <ResultComponent title={"your result"}  count={80} resultGrade={"Great"} resultMessage={"You scored higher than 65% of the people who have taken these tests."} />
          </Col>
          <Col lg="6">
              <SummaryComponent />
          </Col>
        </Row>
        
      </div>
      </>
    );
}

export default Home;
