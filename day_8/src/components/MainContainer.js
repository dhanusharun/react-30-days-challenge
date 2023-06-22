import React from "react";
import { Form, Button } from "react-bootstrap"

const options = [
  {
    value: '',
    label: '-- Select Country--',
  },
  {
    value: 'India',
    label: 'India',
  },
  {
    value: 'USA',
    label: 'USA',
  },
  {
    value: 'Russia',
    label: 'Russia',
  }
]

const skills = [
  { id: 1, label : 'html'}, 
  { id: 2, label : 'css'}, 
  { id: 3, label : 'javascript'}, 
]

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
  <option name="country" value={value}> {label}</option>
))

class MainContainer extends React.Component {
  state = {
    displayName : '',
    email : '',
    phoneNumber : '',
    dob : '',
    favColor : '',
    country : '',
    gender : '',
    skills: [],
    message : ''
  };

  handleSubmit = (e) => {
    alert(`Hi ${this.state.displayName} your form has been submitted.`);
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({[name] : value});
  }

  handleCheckbox = (e) => {
    const { name, checked } = e.target;
    const skills = { ...this.state.skills, [name] : checked};
    this.setState({skills});
  }
  
  render() {
    return (
      <div
        className="container"
        style={{ backgroundColor: this.state.background }}
      >
        <h1 className="heading">React Challenge Form</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Display Name</Form.Label>
            <Form.Control type="text" placeholder="Enter display name" name="displayName" value={this.state.displayName}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="tel" placeholder="Enter phone number" name="phoneNumber" value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control type="date" name="dob" value={this.state.dob}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Favourite color</Form.Label>
            <Form.Control type="color" name="favColor" value={this.state.favColor}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select aria-label="Choose the country" name="country" value={this.state.country}
              onChange={this.handleChange}
            >
              {selectOptions}
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Check inline label="Male" name="gender" type="radio" value="Male" onChange={this.handleChange} 
                      checked={this.state.gender === 'Male'} />
          <Form.Check inline label="Female" name="gender" type="radio" value="Female" onChange={this.handleChange}
                      checked={this.state.gender === 'Female'} />
          <Form.Check inline label="Other" name="gender" type="radio" value="Other" onChange={this.handleChange}
                      checked={this.state.gender === 'Other'} />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            {skills.map((skill) => (
              <Form.Check inline label={skill.label} name={skill.label} type="checkbox" onChange={this.handleCheckbox}
              checked = {this.state.skills[skill.label] || false}
            />
            ))}
          
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default MainContainer;
