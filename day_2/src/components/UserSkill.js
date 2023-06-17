import React from "react";

export const UserSkill = (props) => {
    // const skills = (props) => <li className="user-skill-list-data">{props.skills}</li>
    const skillList = props.skills.map((skill) => <li>{skill}</li>)
    return (
        <>
            <div className="user-skill-wrapper">
                <h3>SKILLS</h3>
                <div className="user-skills">
                    <ul className="user-skill-list">
                        {skillList}
                    </ul>
                </div>
            </div>
        </>
    );
}