import { FILTER_FEEDS, RESET_FILTER } from '../types/index'

export function filterFeeds(filterType) {
    return dispatch => {
        dispatch({
            type: FILTER_FEEDS,
            payload: {
                filterType: filterType
            }
        })
    }
}

export function resetFilter() {
    return dispatch => {
        dispatch({
            type: RESET_FILTER
        })
    }
}