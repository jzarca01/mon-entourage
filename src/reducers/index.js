import { combineReducers } from 'redux'

import entourageReducer from './entourage.reducer'
import mapReducer from './map.reducer'
import enhanceMapReducer from 'redux-map-gl'

const reducers = combineReducers({
    entourage: entourageReducer,
    map: enhanceMapReducer(mapReducer, {
        latitude: 48.8618630253377,
        longitude: 2.3691194,
        zoom: 10
      })
})

export default reducers