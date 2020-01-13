import React from 'react'
import ReactDOM from 'react-dom'
//包裹app 子组件有store属性
import {Provider} from 'react-redux'
import App from './app'
//子组件不用引入store组件
import store from './redux/store'
ReactDOM.render(<Provider store={store}><App/></Provider >,document.getElementById('root'))
