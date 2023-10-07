import React from "react";
import './button.css'

export function Button({onClick}) {
    return(
        <button onClick={onClick}>Want another one ?</button>
    )
}