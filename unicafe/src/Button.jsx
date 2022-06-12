import React from "react";

const Button = ({handle, text}) => {
    return (
        <button onClick={handle}>{text}</button>
    )
}

export default Button