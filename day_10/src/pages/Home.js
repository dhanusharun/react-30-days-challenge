import React from "react";
import QRCodeComponent from "../components/QRComponent";
import { Card, Button, Container, Row, Col, Form, Spinner } from "react-bootstrap";

class Home extends React.Component {

  componentDidMount = () => {
     // after 3 seconds it resets the state
     setTimeout(() => {
        this.setState({isLoaded : true})
      }, 3000)
  }
  
  componentDidUpdate = () => {
     // after 3 seconds it resets the state
     setTimeout(() => {
        this.setState({isLoaded : true})
      }, 2000)
  }

  state = {
    textbox: "",
    isLoaded : false,
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({isLoaded:false})
  };

  handleClear = () => {
    this.setState({textbox: ""});
  }

  render() {
    return (
      <>
        <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }} >
          <Row className="justify-content-md-center">
            <Col>
              <Card className="justify-content-md-center align-content-center d-flex" style={{ width: "20rem", borderRadius: "20px" }}>
                <Card.Body>
                    <div className="box" >
                        {!this.state.isLoaded ? 
                        <Spinner /> : 
                        <QRCodeComponent text={this.state.textbox}/> 
                        }
                    </div>
                    
                </Card.Body>
                <Card.Body>
                  <Card.Title>QR Generator</Card.Title>
                  <Card.Text>
                   <Form.Control type="text" placeholder="Enter any keyword to convert as QR" name="textbox" value={this.state.textbox} onChange={this.handleChange}></Form.Control>
                  </Card.Text>
                  <Button variant="primary" onClick={() => alert("Submitted")}>Submit</Button>{"   "}
                  <Button variant="secondary" onClick={this.handleClear}>Clear</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Home;
