import React from "react"

const ImageHolder = (props) => {
    return (
        <div>
            <img className="image-holder" src={props.image_path} alt={props.image_name} style={{height: props.image_height, width: props.image_width}}></img>
        </div>
    )
}

export default ImageHolder;