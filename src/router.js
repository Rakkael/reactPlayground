import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App'
import Home from './HomePage/Home'

export default class RouterMap extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={"/"} component={Home} />
                    <Route exact path={"/test/:params"} component={App} />
                </Switch>
            </Router>
        )
    }
}