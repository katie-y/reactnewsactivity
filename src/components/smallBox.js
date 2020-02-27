import React from "react";

const SmallBox = (props) => {
    return (
        <div className="smallBox">
            <div id="imageBox">
                <img id="image" src={props.imageSrc} />
            </div>
            <div className="info">
                    <small className = "headline">{props.headline}</small>
                    <small className = "category">{props.category}</small>
            </div>
        </div>
    )
}

export default SmallBox;