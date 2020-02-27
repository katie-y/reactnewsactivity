import React from "react";
import SmallBox from "./smallBox";

const BigBox = (props) => {
    return (
        <div className="bigBox">
            <div className="sectionHeader">
                    <h2>{props.sectionHeader}</h2>
                <small className = "arrow">></small>
            </div>
            <div className="boxes">
                <SmallBox imageSrc={props.imageSrc1} headline={props.headline1} category={props.category1} />
                <SmallBox imageSrc={props.imageSrc2} headline={props.headline2} category={props.category2} />
                <SmallBox imageSrc={props.imageSrc3} headline={props.headline3} category={props.category3} />
            </div>
        </div>
    )
}

export default BigBox;