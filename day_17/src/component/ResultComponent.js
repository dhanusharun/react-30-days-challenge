import React from "react";
import { Row, Col } from "react-bootstrap";
import { useSelector } from "react-redux";

const ResultComponent = () => {

  const years = useSelector(state => state.years);
  const months = useSelector(state => state.months);
  const days = useSelector(state => state.days);

  return (
    <div className="result-wrapper">
      <Row lg="2">
        <Col lg="12">
          <h1>
            <i>
              <b>{years === 0 ? "--" : years }</b>years
            </i>
          </h1>
        </Col>
      </Row>
      <Row lg="2">
        <Col lg="12">
          <h1>
            <i>
              <b>{months === 0 ? "--" : months }</b>months
            </i>
          </h1>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <h1>
            <i>
              <b>{days === 0 ? "--" : days }</b>days
            </i>
          </h1>
        </Col>
      </Row>
    </div>
  );
};

export default ResultComponent;
