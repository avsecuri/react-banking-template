import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Dashboard from '../Dashboard/Dashboard';
import Home from '../Home/Home';

export default class RouterURL extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/dashboard" component={Dashboard} />
                </div>
            </Router>
        )
    }
}
