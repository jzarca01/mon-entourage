import { combineReducers } from 'redux'

import entourageReducer from './entourage.reducer'
import mapReducer from './map.reducer'
import enhanceMapReducer from 'redux-map-gl'

const reducers = combineReducers({
    entourage: entourageReducer,
    map: enhanceMapReducer(mapReducer, {
        latitude: 48.8574814,
        longitude: 2.3324199,
        zoom: 11.5
      })
})

export default reducers