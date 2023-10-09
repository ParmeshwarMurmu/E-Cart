import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import { reducer as adminMenReducer } from "../adminMenReducer/reducer";
import { reducer as adminWomenReducer } from "../adminWomenReducer/reducer";
import { reducer as menTrackPants} from '../MenTrackPantsSlideShow/reducer';
import { reducer as singleProductPage } from '../SingleProductPage/reducer';
import { reducer as womenSareeReducer } from '../womenSareeReducer/reducer';
import { reducer as womenTrendingReducer } from '../womenTrendingReducer/reducer';
import { reducer as womenKurtasKurtisReducer } from '../womenKurtasKurtisReducer/reducer';
import { reducer as adminShoeReducer } from '../adminShoeReducer/reducer';
import { reducer as womenFlatShoeReducer } from '../womenFlatShoeReducer/reducer';
import { reducer as shoesHeelsTrendingReducer } from '../shoeHeelsTrendingReducer/reducer';
import { reducer as menFormalShoesReducer } from '../menFormalShoesReducer/reducer';
import { reducer as menShoeTrendingReducer } from '../menShoeTrendingReducer/reducer';
import { reducer as menShoeBootsReducer } from '../menShoeBootsReducer/reducer';
import { reducer as allMenProductReducer } from '../allMenProductReducer/reducer';
import { reducer as userReducer } from '../userReducer/reducer'

import thunk from"redux-thunk"

const rootReducer = combineReducers({
    adminMenReducer,
    adminWomenReducer,
    menTrackPants,
    singleProductPage,
    womenSareeReducer,
    womenTrendingReducer,
    womenKurtasKurtisReducer,
    adminShoeReducer,
    womenFlatShoeReducer,
    shoesHeelsTrendingReducer,
    menFormalShoesReducer,
    menShoeTrendingReducer,
    menShoeBootsReducer,
    allMenProductReducer,
    userReducer

})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunk))