import {
	INIT_ENTOURAGE,
	ERROR_INIT,
	FETCH_FEEDS,
	FETCH_FEEDS_SUCCEEDED,
	FETCH_FEEDS_ERROR,
	FILTER_FEEDS,
	RESET_FILTER
} from '../types'

const initialState = {
	isLogged: false,
	isLoading: false,
    feeds: [],
	isError: false,
	filterType: null
}

function entourageReducer(state = initialState, action) {
	switch (action.type) {
		case INIT_ENTOURAGE:
			return {
                ...state,
				isLogged: true
			}
		case ERROR_INIT:
			return {
				...state,
				isError: true
			}
		case FETCH_FEEDS:
			return {
				...state,
				isLoading: true
			}
		case FETCH_FEEDS_SUCCEEDED:
			return {
				...state,
				...action.payload,
				isLoading: false
			}
		case FETCH_FEEDS_ERROR:
			return {
				...state,
				isError: true,
				isLoading: false
			}
		case FILTER_FEEDS:
			return {
				...state,
				...action.payload
			}
		case RESET_FILTER:
			return {
				...state,
				filterType: null
			}
		default:
			return state
	}
}

export default entourageReducer
