import React from "react";
import Part from "./Part";

const Content = (props) => {
    return (
        <div>
            <Part part={props.parts[0]} exercise={props.exercises[0]}/>
            <Part part={props.parts[1]} exercise={props.exercises[1]}/>
            <Part part={props.parts[2]} exercise={props.exercises[2]}/>
        </div>
    )
}

export default Content;