import React from "react";

class MainContainer extends React.Component {
  state = {
    background: "#0000FF",
    buttonColor: "#FFF",
    onHoverButtonColor: "#FFF",
    onReleaseButtonColor: "#000",
  };

  handleMouseEnter = () => {
    const hexCharacters = "0123456789ABCDEF";
    let buttonColor = "#";

    for (let i = 0; i < 6; i++) {
      const randomIndex = Math.floor(Math.random() * hexCharacters.length);
      buttonColor += hexCharacters[randomIndex];
    }
    let previousButtonColor = buttonColor;

    this.setState({ buttonColor, previousButtonColor });
  };

  handleClick = () => {
    let background = this.state.buttonColor;
    let buttonColor = "#FFF";
    this.setState({ background, buttonColor });
  };

  render() {
    return (
      <div
        className="container"
        style={{ backgroundColor: this.state.background }}
      >
        <h2 className="heading">{this.state.background}</h2>
        <div
          className="box"
          style={{ backgroundColor: this.state.buttonColor }}
          onClick={this.handleClick}
          onMouseEnter={this.handleMouseEnter}
        >
          <h3>Change background to {this.state.buttonColor}</h3>
        </div>
      </div>
    );
  }
}

export default MainContainer;
