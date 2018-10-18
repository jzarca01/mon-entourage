import Entourage from 'node-entourage'
import config from '../config/config.js'
import { INIT_ENTOURAGE, ERROR_INIT, FETCH_FEEDS, FETCH_FEEDS_SUCCEEDED, FETCH_FEEDS_ERROR } from '../types/index'

const entourage = new Entourage({
	apiKey: config.entourageApiKey
})

export function createInstance() {
	return async dispatch => {
		function onSuccess() {
			dispatch({ type: INIT_ENTOURAGE })
			return {
                isLogged: true
            }
		}
		function onError(error) {
			dispatch({ type: ERROR_INIT, error })
			return error
		}
		try {
			await entourage.login('0677812319', '849229')
			onSuccess()
		} catch (err) {
			onError(err)
		}
	}
}

export function getFeeds() {
	return async dispatch => {
		function onSuccess(feeds) {
            dispatch({ 
                type: FETCH_FEEDS_SUCCEEDED, 
                payload: feeds
            })
			return feeds
		}
		function onError(error) {
			dispatch({ type: FETCH_FEEDS_ERROR, error })
			return error
		}
		try {
			dispatch({ type: FETCH_FEEDS })
			const feeds = await entourage.getFeeds({
                latitude: 48.8760826,
                longitude: 2.3691194
            }, 1000)
			onSuccess(feeds)
		} catch (err) {
			onError(err)
		}
	}
}
