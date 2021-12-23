import React, { Component } from "react";
import { Link } from "react-router-dom";
import sodaImg from "./Soda.png";
import "./Soda.css";

class Soda extends Component {
    render() {
        return (
            <div className="Soda">
                <h1>Soda</h1>
                <img src={sodaImg} alt="coca cola can" />
            </div>
        );
    }
}

export default Soda;
