import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; //v6 no longer use switch, replaced with routes
import HomePage from '../pages/HomePage';


class AppRouter extends Component {
    render() {
        return (
            <Fragment>
                <Router>
                    <Switch>
                        <Route exact path="/" component={HomePage} />
                        {/* apply this if using react-router-dom v6 <Route exact path="/" element={<HomePage />} /> */}
                        
                    </Switch>
                </Router>
            </Fragment>
        )
    }
}

export default AppRouter
