import React from "react";
import { Form, Button } from "react-bootstrap";
import { exclamatoryIcon } from "../utils/icons";

const options = [
  {
    value: "",
    label: "-- Select Country--",
  },
  {
    value: "India",
    label: "India",
  },
  {
    value: "USA",
    label: "USA",
  },
  {
    value: "Russia",
    label: "Russia",
  },
];

const skills = [
  { id: 1, label: "html" },
  { id: 2, label: "css" },
  { id: 3, label: "javascript" },
];

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
  <option name="country" value={value}>
    {" "}
    {label}
  </option>
));

class MainContainer extends React.Component {
  state = {
    displayName: "",
    email: "",
    phoneNumber: "",
    dob: "",
    favColor: "",
    country: "",
    gender: "",
    skills: [],
    message: "",

    displayNameIsValid: true,
    emailIsValid: true,
    phoneNumberIsValid: true,
    dobIsValid: true,
    favColorIsValid: true,
    countryIsValid: true,
    genderIsValid: true,
    skillsIsValid: true,
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { displayName, email, phoneNumber, dob, favColor, country, gender, skills } = this.state;
    var isValid = true;

    if (displayName === "" || displayName === undefined) {
      this.setState({ displayNameIsValid: false });
      isValid = false;
    }

    if (email === "" || email === undefined) {
      this.setState({ emailIsValid: false });
      isValid = false;
    }

    if (phoneNumber === "" || phoneNumber === undefined) {
      this.setState({ phoneNumberIsValid: false });
      isValid = false;
    }

    if (dob === "" || dob === undefined) {
      this.setState({ dobIsValid: false });
      isValid = false;
    }

    if (favColor === "" || favColor === undefined) {
      this.setState({ favColorIsValid: false });
      isValid = false;
    }

    if (country === "" || country === undefined) {
      this.setState({ countryIsValid: false });
      isValid = false;
    }

    if (gender === "" || gender === undefined) {
      this.setState({ genderIsValid: false });
      isValid = false;
    }

    if (skills.length === 0 || skills === undefined) {
      this.setState({ skillsIsValid: false });
      isValid = false;
    }

    

    if (isValid)
    {
      alert(`Hi ${displayName}, your form has been submitted.`);
      window.location.reload();
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
    this.setState({ [name + "IsValid"]: true });
  };

  handleCheckbox = (e) => {
    const { name, checked } = e.target;
    const skills = { ...this.state.skills, [name]: checked };
    this.setState({ skills });
    this.setState({"skillsIsValid" : true });
  };

  validationLable = (message) => {
    return (
      <div className="validationLable">
        <div className="col">{exclamatoryIcon} </div>
        <div className="col">{message}</div>
      </div>
    );
  };

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
            <Form.Control
              className={!this.state.displayNameIsValid ? "invalidControl" : ""}
              type="text"
              placeholder="Enter display name"
              name="displayName"
              value={this.state.displayName}
              onChange={this.handleChange}
            />
            {!this.state.displayNameIsValid &&
              this.validationLable("Display name is required")}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className={!this.state.emailIsValid ? "invalidControl" : ""}
              type="email"
              placeholder="Enter email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {!this.state.emailIsValid &&
              this.validationLable("Email is required")}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              className={!this.state.phoneNumberIsValid ? "invalidControl" : ""}
              type="tel"
              placeholder="Enter phone number"
              name="phoneNumber"
              value={this.state.phoneNumber}
              onChange={this.handleChange}
            />
            {!this.state.phoneNumberIsValid &&
              this.validationLable("Phone number is required")}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Date of birth</Form.Label>
            <Form.Control
              className={!this.state.dobIsValid ? "invalidControl" : ""}
              type="date"
              name="dob"
              value={this.state.dob}
              onChange={this.handleChange}
            />
            {!this.state.dobIsValid &&
              this.validationLable("Date of birth is required")}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Favourite color</Form.Label>
            <Form.Control
              className={!this.state.favColorIsValid ? "invalidControl" : ""}
              type="color"
              name="favColor"
              value={this.state.favColor}
              onChange={this.handleChange}
            />
            {!this.state.favColorIsValid &&
              this.validationLable("Favourite color is required")}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Select
              className={!this.state.countryIsValid ? "invalidControl" : ""}
              aria-label="Choose the country"
              name="country"
              value={this.state.country}
              onChange={this.handleChange}
            >
              {selectOptions}
            </Form.Select>
            {!this.state.countryIsValid &&
              this.validationLable("Country is required")}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <div  className={!this.state.genderIsValid ? "invalid-radio-Control" : ""}>
            <Form.Check
              inline
              label="Male"
              name="gender"
              type="radio"
              value="Male"
              onChange={this.handleChange}
              checked={this.state.gender === "Male"}
            />
            <Form.Check
              inline
              label="Female"
              name="gender"
              type="radio"
              value="Female"
              onChange={this.handleChange}
              checked={this.state.gender === "Female"}
            />
            <Form.Check
              inline
              label="Other"
              name="gender"
              type="radio"
              value="Other"
              onChange={this.handleChange}
              checked={this.state.gender === "Other"}
            />
            </div>
            
            {!this.state.genderIsValid &&
              this.validationLable("Gender is required")}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
          <div  className={!this.state.skillsIsValid ? "invalid-radio-Control" : ""}>
            {skills.map((skill) => (
              <Form.Check
                inline
                label={skill.label}
                name={skill.label}
                type="checkbox"
                onChange={this.handleCheckbox}
                checked={this.state.skills[skill.label] || false}
              />
            ))}
            </div>
            {!this.state.skillsIsValid &&
              this.validationLable("Skills is required")}
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
