import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { reducer as adminMenReducer } from "../adminMenReducer/reducer";
import { reducer as adminWomenReducer } from "../adminWomenReducer/reducer";
import { reducer as menTrackPants} from '../MenTrackPantsSlideShow/reducer';
import { reducer as singleProductPage } from '../SingleProductPage/reducer';
import { reducer as womenSareeReducer } from '../womenSareeReducer/reducer';
import { reducer as womenTrendingReducer } from '../womenTrendingReducer/reducer';
import { reducer as womenKurtasKurtisReducer } from '../womenKurtasKurtisReducer/reducer';
import { reducer as adminShoeReducer } from '../adminShoeReducer/reducer'

import thunk from"redux-thunk"

const rootReducer = combineReducers({
    adminMenReducer,
    adminWomenReducer,
    menTrackPants,
    singleProductPage,
    womenSareeReducer,
    womenTrendingReducer,
    womenKurtasKurtisReducer,
    adminShoeReducer

   

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))