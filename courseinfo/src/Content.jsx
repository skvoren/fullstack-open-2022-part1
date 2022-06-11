import React from "react";
import Part from "./Part";

const Content = (props) => {
    const parts = props.parts

    return (
        <div>
            {parts.map((part) =>
                <Part key={part.name} part={part}/>
            )}
        </div>
    )
}

export default Content;
