import React from "react";

const GridContainer = (props) => {
    return(
        <>
        <div className="grid-box" style={{backgroundColor: props.color}}>
            <h2>{props.number}</h2>
        </div>
        </>
    );
}

export default GridContainer;