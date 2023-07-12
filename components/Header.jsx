import React from "react";
import navLogo from "../images/troll-face.png"

export default function Header() {
    return (
        <nav>
            <img src={navLogo} className="nav--logo" />
            <h3 className="nav--title">Meme Generator</h3>
            <h5 className="nav--text">React Course - Project 3</h5>
        </nav>
    )
}