import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About";
import Chart from "./components/pages/Chart";
import CopyClipboard from "./components/pages/CopyClipboard";
import Selfie from "./components/pages/Selfie";
import Footer from "./components/layout/Footer";

import StackoverflowState from "./context/stackoverflow/StackoverflowState";

import "./App.css";

const App = () => {
    return (
        <StackoverflowState>
            <Router>
                <div className="App">
                    <Navbar />
                    <div className="container">
                        <Switch>
                            <Route exact path="/" component={About} />
                            <Route exact path="/chart" component={Chart} />
                            <Route
                                exact
                                path="/copyclipboard"
                                component={CopyClipboard}
                            />
                            <Route exact path="/selfie" component={Selfie} />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </StackoverflowState>
    );
};

export default App;
