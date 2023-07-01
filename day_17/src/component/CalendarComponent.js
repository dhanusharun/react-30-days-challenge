import React from "react";
import ResultComponent from "./ResultComponent";
import DatePickerComponent from "./DatePickerComponent"
import { Row, Col, Container } from "react-bootstrap";

const CalendarComponent = () => {

  return (
    <Container className="calendar-wrapper">
      <Row>
        <DatePickerComponent />
      </Row>
      <Row>
        <Col>
          <ResultComponent />
        </Col>
      </Row>
    </Container>
  );
};

export default CalendarComponent;
