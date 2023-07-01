import React,  { useState } from 'react'
import {Row, Col, Container, Form} from "react-bootstrap"
import { useDispatch } from 'react-redux'

const DatePickerComponent = () => {

  const [day, setDay] = useState(0);
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);

  const handleChangeDay = (e) => {
    setDay(e.target.value);
  }
  const handleChangeMonth = (e) => {
    setMonth(e.target.value);
  }
  const handleChangeYear = (e) => {
    setYear(e.target.value);
  }

  const dispatch =  useDispatch();

  const handleClick = (e) => {
    
    const updatedState = {
      years: year,
      months: month,
      days: day
    };
    dispatch({
      type : "SUBMIT_CAL",
      data : updatedState
    })
   
  }

  return (
    <div>
      <div>
        <Container className="datepicker-container">
          <Row>
            <Col lg={4}>
              <Row lg={2}>
                <Col lg={12}>
                  <label>DAY</label>
                </Col>
                <Col lg={12}>
                  <Form.Control type="number" className="input-box" value={day} onChange={handleChangeDay} />
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <Row lg={2}>
                <Col lg={12}>
                  <label>MONTH</label>
                </Col>
                <Col lg={12}>
                  <Form.Control type="number" className="input-box" value={month} onChange={handleChangeMonth} />
                </Col>
              </Row>
            </Col>
            <Col lg={4}>
              <Row lg={2}>
                <Col lg={12}>
                  <label>YEAR</label>
                </Col>
                <Col lg={12}>
                  <Form.Control type="number" className="input-box" value={year} onChange={handleChangeYear} />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row className="hrline-datepicker d-flex justify-content-center align-items-center">
            <Col lg={11}>
              <hr />
            </Col>
            <Col lg={1}>
              <button className="cal-button" onClick={handleClick}>Cal</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default DatePickerComponent
