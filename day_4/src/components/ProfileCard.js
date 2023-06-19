import React from "react";
import profileImage from "../assets/profile.jpg"

class ProfileCard extends React.Component{
    lightMode = "profile-card-light";
    darkMode = "profile-card-dark";

    state = {
        mode : "profile-card-light",
        buttonLabel : "Dark Mode"
    }

    changeBackgroudColor = () => {
        const mode = this.state.mode === this.lightMode ? this.darkMode : this.lightMode;
        const buttonLabel = this.state.mode === this.lightMode ? "Light Mode" : "Dark Mode";
        this.setState({ mode, buttonLabel });
    }

    render()
    {
        return (
            <div className={this.state.mode} >
                <div className="profile-image">
                    <img src={profileImage} alt="img"></img>
                </div>
                <div className="profile-content">
                    <h1>Arun Balajii</h1>
                    <h5>Software Engineer, India</h5>
                </div>
                <div>
                    <button className="btn-change-mode" onClick={this.changeBackgroudColor}>{this.state.buttonLabel}</button>
                </div>
            </div>
        )
    }
}

export default ProfileCard