import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import countryJson from "country-flag-emoji-json";

class CountryContainer extends React.Component {
  state = {
    image: "",
    name: "",
    code: "",
    unicode: "",
  };

  componentDidMount() {
    this.changeCountry();
  }

  changeCountry = () => {
    const randomObject =
      countryJson[Math.floor(Math.random() * countryJson.length)];
    this.setState(randomObject);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col> </Col>
          <Col>
            <Card style={{ width: "28rem" }}>
              <Card.Img variant="top" src={this.state.image} />
              <Card.Body>
                <Card.Title>{this.state.name}</Card.Title>
                <Card.Text>
                  The code of the country is <b>{this.state.code}, </b>
                  The unicode of the country is <b>{this.state.unicode}.</b>
                </Card.Text>
                <Button className="text-center" variant="primary" onClick={this.changeCountry}>
                  Change country
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col> </Col>
        </Row>
      </Container>
    );
  }
}

export default CountryContainer;
