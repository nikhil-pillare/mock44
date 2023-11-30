
import  { reducer as authReducer }from "../redux/auth/reducer"
import forumReducer from "./forem/reducer"
import thunk from 'redux-thunk'
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"
const rootReducer = combineReducers({auth:authReducer,forum: forumReducer})
export const store= legacy_createStore(rootReducer, applyMiddleware(thunk))