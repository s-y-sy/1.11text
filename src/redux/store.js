import {createStore,applyMiddleware} from 'redux'
//处理异步
import thunk from 'redux-thunk'
//开发环境使用
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers'
export default createStore(
    reducers,
    //判断环境生产环境不需要composeWithDevTools
    process.env.NODE_ENV === 'development'
        ? composeWithDevTools(applyMiddleware(thunk))
        : applyMiddleware(thunk)
    )