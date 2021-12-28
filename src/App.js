import { Component } from "react/cjs/react.production.min";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import VendingMachine from "./VendingMachine";

class App extends Component {
    render() {
        return (
            <div>
                <main>
                    <Routes>
                        <Route path="/" element={<VendingMachine />} />
                        <Route path="/chips" element={<Chips />} />
                        <Route path="/sardines" element={<Sardines />} />
                        <Route path="/soda" element={<Soda />} />
                    </Routes>
                </main>
            </div>
        );
    }
}

export default App;
