import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const SummaryListItemComponent = (props) => {
  return (
    <div>
      <NavLink to={props.title} style={{textDecoration:'none'}}>
        <Row
          className="d-flex justify-content-center align-items-center summary-list-item"
          style={{ backgroundColor: props.backgroundColor }}
        >
          <Col xs="1" sm="1" md="1" lg="1">
            <div className="title-icon">{props.icon}</div>
          </Col>
          <Col xs="5" sm="5" md="5" lg="5">
            <div className="title" style={{ color: props.color }}>
              {props.title}
            </div>
          </Col>
          <Col xs="6" sm="6" md="6" lg="6">
            <div className="title-percentage">
              <div className="main-percent">
                <b>{props.count}</b> / 100
              </div>
            </div>
          </Col>
        </Row>
      </NavLink>
    </div>
  );
}

export default SummaryListItemComponent
