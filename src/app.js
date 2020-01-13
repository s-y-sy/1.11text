import React, { Component } from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from './commponent/home'
import Login from './commponent/login'
export default class App extends Component {
    render() {
        return (
            <Router>
                <Route path='/' component={Home}/>
                <Route path='/login' component={Login}/>
            </Router>
        )
    }
}
