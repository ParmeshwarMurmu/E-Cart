import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { reducer as adminMenReducer } from "../adminMenReducer/reducer";
import { reducer as adminWomenReducer } from "../adminWomenReducer/reducer";
import { reducer as menTrackPants} from '../MenTrackPantsSlideShow/reducer';
import { reducer as singleProductPage } from '../SingleProductPage/reducer'

import thunk from"redux-thunk"

const rootReducer = combineReducers({
    adminMenReducer,
    adminWomenReducer,
    menTrackPants,
    singleProductPage

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))