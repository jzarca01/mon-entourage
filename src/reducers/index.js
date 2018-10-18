import { combineReducers } from 'redux'

import entourageReducer from './entourage.reducer'
import mapReducer from './map.reducer'
import enhanceMapReducer from 'redux-map-gl'

const reducers = combineReducers({
    entourage: entourageReducer,
    map: enhanceMapReducer(mapReducer, {
        latitude: 48.87143494472935,
        longitude: 2.357862651582299,
        zoom: 11.5
      })
})

export default reducers