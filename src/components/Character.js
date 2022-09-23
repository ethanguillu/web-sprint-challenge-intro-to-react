// Write your Character component here
import React, { useState, useEffect} from "react";
import axios from "axios";

const Character = (props) => {
    return (
        <div>
            <h1 className="Header">Characters</h1>
            <h2>{props.charInfo[0].name}</h2>
            <h2>{props.charInfo[1].name}</h2>
            <h2>{props.charInfo[2].name}</h2>
            <h2>{props.charInfo[3].name}</h2>
            <h2>{props.charInfo[4].name}</h2>
            <h2>{props.charInfo[5].name}</h2>
        </div>
    )
}

export default Character;