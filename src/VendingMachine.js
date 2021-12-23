import React, { Component } from "react";
import { Link } from "react-router-dom";
import vendingMachineImg from "./VendingMachine.png";
import "./VendingMachine.css";

class VendingMachine extends Component {
    render() {
        return (
            <div
                className="VendingMachine"
                style={{ backgroundImage: `url(${vendingMachineImg})` }}
            ></div>
        );
    }
}

export default VendingMachine;
