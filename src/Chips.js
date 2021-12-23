import React, { Component } from "react";
import { Link } from "react-router-dom";
import chipsImg from "./Chips.png";
import "./Chips.css";

class Chips extends Component {
    render() {
        return (
            <div className="Chips">
                <h1>Chips</h1>
                <img src={chipsImg} className="bag" alt="bag of lay's chips" />
            </div>
        );
    }
}

export default Chips;
