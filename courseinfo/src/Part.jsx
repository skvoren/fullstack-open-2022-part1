import React from "react";

const Part = (props) => {
    return (
        <p>{props.part.name} {props.part.exercise}</p>
    )
}

export default Part;