import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { reducer as adminMenReducer } from "../adminMenReducer/reducer";
import { reducer as adminWomenReducer } from "../adminWomenReducer/reducer";
import thunk from"redux-thunk"

const rootReducer = combineReducers({
    adminMenReducer,
    adminWomenReducer
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))