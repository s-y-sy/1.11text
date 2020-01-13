//暴露多个reducer
import {combineReducers} from 'redux'
function aa(prevent=1,action){
    switch(action.type){
        default:
            return prevent
    }
        
}
function bb(prevent=3,action){
    switch(action.type){
        default:
            return prevent
    }
        
}
export default combineReducers({
    aa,
    bb
})