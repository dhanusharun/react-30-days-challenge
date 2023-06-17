import React from "react";
import verifiedLogo from "../assets/img/verified.png";

export const UserProfile = (props) => {
    return (
        <>
            <div className="user-profile-wrapper">
                <div className="user-profile-image">
                    <img src={props.userProfileImage} alt="userProfile"></img>
                </div>
                <div className="user-profile-detail">
                    <div className="user-profile-detail-name">
                        <h2>{props.userName}</h2>
                        <img className="verifiedLogo" src={verifiedLogo} alt="verfiedlogo"></img>
                    </div>
                    <h3>{props.designation}</h3>
                </div>
            </div>
        </>
    );
}