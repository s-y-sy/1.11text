import React, { Component } from 'react'
//引入路由
import {BrowserRouter as Router,Route} from 'react-router-dom'
import Home from './commponent/home'
import Login from './commponent/login'
export default class App extends Component {
    render() {
        return (
            //根据路径 切换组件
            <Router>
                <Route path='/' exact component={Home}/>
                <Route path='/login' esact component={Login}/>
            </Router>
        )
    }
}
