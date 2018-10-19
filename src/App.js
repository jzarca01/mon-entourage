import React, { Component } from 'react'
import './App.css'

import config from './config/config.js'

import Map from './components/map/map.container'
import Bot from './components/bot/bot.container'
import StickyFooter from 'react-sticky-footer'

class App extends Component {
	render() {
		return (
			<div className="App">
				<div className="container">
					<Map mapToken={config.mapboxToken} />
					<Bot />
				</div>
				<StickyFooter
					bottomThreshold={50}
					normalStyles={{
						textAlign: 'center',
						backgroundColor: '#fff',
						padding: '1rem'
					}}
					stickyStyles={{
						textAlign: 'center',
						backgroundColor: '#fff',
						padding: '1rem'
					}}>
					<footer>Fait avec ♥ par 
					<a href="https://twitter.com/Jeremie__" target="_blank" rel="noopener noreferrer">
						 Jérémie Zarca
					</a></footer>
					
				</StickyFooter>
			</div>
		)
	}
}

export default App
