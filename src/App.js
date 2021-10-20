import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
//import Alert from "./components/layout/Alert";
//import User from "./components/users/User";
import About from "./components/pages/About";
//import Home from "./components/pages/Home";
//import NotFound from "./components/pages/NotFound";
import Chart from "./components/pages/Chart";
import CopyClipboard from "./components/pages/CopyClipboard";
import Selfie from "./components/pages/Selfie";

//import GithubState from "./context/github/GithubState";
//import AlertState from "./context/alert/AlertState";
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
                </div>
            </Router>
        </StackoverflowState>
    );
};

export default App;
