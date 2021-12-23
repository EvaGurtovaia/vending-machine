import { Component } from "react/cjs/react.production.min";
import { Route } from "react-router-dom";
import "./App.css";
import Chips from "./Chips";
import Sardines from "./Sardines";
import Soda from "./Soda";
import VendingMachine from "./VendingMachine";

class App extends Component {
    render() {
        return (
            <div className="App">
                <Route exact path="/" render={() => <VendingMachine />} />
                <Route exact path="/soda" render={() => <Soda />} />
                <Route exact path="/sardines" render={() => <Sardines />} />
                <Route exact path="/chips" render={() => <Chips />} />
            </div>
        );
    }
}

export default App;
