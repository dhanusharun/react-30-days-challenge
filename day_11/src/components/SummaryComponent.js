import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { icon_memory_svg, icon_reaction_svg, icon_verbal_svg, icon_visual_svg } from '../utils/icons';
import SummaryListItemComponent from './SummaryListItemComponent';

const SummaryComponent = () => {
  return (
    <div className="summary-wrapper">
      <Row>
        <Col>
          <h5 className="summary-header">Summary</h5>
        </Col>
      </Row>
      <Row >
        <Col lg="12">
          <div className="summary-list">
            <SummaryListItemComponent icon={icon_reaction_svg} title={"Reaction"} color={'hsl(0, 100%, 67%)'} backgroundColor = {'hsla(0, 100%, 67%, 0.1)'} count={80} />
            <SummaryListItemComponent icon={icon_memory_svg} title={"Memory"} color={'hsl(39, 100%, 56%)'}  backgroundColor = {'hsla(39, 100%, 56%, 0.1)'} count={92} />
            <SummaryListItemComponent icon={icon_verbal_svg} title={"Verbal"} color={'hsl(166, 100%, 37%)'}  backgroundColor = {'hsla(166, 100%, 37%, 0.1)'} count={61} />
            <SummaryListItemComponent icon={icon_visual_svg} title={"Visual"} color={'hsl(234, 85%, 45%)'}  backgroundColor = {'hsla(234, 85%, 45%, 0.1)'} count={72} />
          </div>
        </Col>
      </Row>
      <Row>
        <button className="summary-btn">Continue</button>
      </Row>
    </div>
  );
}

export default SummaryComponent
