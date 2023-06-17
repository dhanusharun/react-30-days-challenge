import React from "react";
import { UserProfile } from "./UserProfile";
import { UserSkill } from "./UserSkill";

import userProfileImage from "../assets/asabeneh.jpg"
import clockLogo from "../assets/img/clock.png";

const ProfileCard = () => {
    return(
        <div className="profile-card">
            <UserProfile userProfileImage={userProfileImage} userName={'Arun Balajii'} designation={'Software Engineer, India'} />
            <UserSkill skills={['HTML','CSS','React','.net', 'node js', 'sql', 'mongo', 'azure', 'aws', 'mvc', 'java', 'bootstrap', 'nginx', 'native']} />
            <div className="profile-joined-date-wrapper">
                <img className="clock-logo" src={clockLogo} alt="clocklogo"></img>
                <h3 className="profile-joined-date">Joined on Aug 30, 2020</h3>
            </div>
            
        </div>
    );
}

export default ProfileCard;