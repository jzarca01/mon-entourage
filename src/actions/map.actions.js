import { MAP_LOADED } from '../types/index'

export function loadMap() {
    return dispatch => {
        dispatch({
            type: MAP_LOADED
        })
    }
}