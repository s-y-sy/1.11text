import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
export default function withCheckLogin(WrappedComponent){
    @connect(state=>({ user: state.user }),null)
    class CheckLogin extends Component {
        static displayName = `checkLogin(${WrappedComponent.displayName || 
        appedComponent.name || 
        'Component' })`

        render(){
            const {
                user : { token },
                location : { pathname }
            } = this.props
            return
        }
    }
}