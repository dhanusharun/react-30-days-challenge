import React from 'react'
import { Row, Col } from 'react-bootstrap'

const ResultComponent = (props) => {
  return (
    <div className="result-wrapper">
      <Row>
        <h5 className='result-header'>{props.title}</h5>
      </Row>
      <Row className="d-flex justify-content-center align-items-center">
        <Col xs="5" sm="4" md="3" lg="5" xl="5" xxl="5">
          <div className={props.className != null ? props.className + " percentage-circle" : "percentage-circle"}>
            <div className="precentage-circle-content">
              <h1>{props.count}</h1>
              {"\n"}
              <h5>of 100</h5>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <div className="result-content">
          <Row>
            <h2>{props.resultGrade}</h2>
          </Row>
          <Row className='d-flex justify-content-center'>
            <Col lg="9">
              <p>
                {props.resultMessage}
              </p>
            </Col>
          </Row>
        </div>
      </Row>
    </div>
  );
}

export default ResultComponent
