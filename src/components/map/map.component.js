import React from 'react'
import MapGL, { Marker, Popup } from 'react-map-gl'

import './map.css'

import Pin from './pin.component'
import PoiInfo from './poi-info.component'

class Map extends React.Component {
	constructor() {
		super()
		this.state = {
			popupInfo: null
		}
	}

	_renderMarker = (poi, index) => {
		const location = poi.data.location
		const isContribution = poi.data.entourage_type === 'contribution'
		return (
			<Marker
				key={`marker-${index}`}
				longitude={location ? location.longitude: 0}
				latitude={location ? location.latitude: 0}>
				<Pin size={20} isContribution={isContribution} onClick={() => this.setState({popupInfo: poi.data})} />
			</Marker>
		)
	}

	_renderPopup() {
		const {popupInfo} = this.state;
		return popupInfo && (
		  <Popup tipSize={5}
			anchor="top"
			longitude={popupInfo.location.longitude}
			latitude={popupInfo.location.latitude}
			onClose={() => this.setState({popupInfo: null})} >
			<PoiInfo info={popupInfo} />
		  </Popup>
		);
	  }

	render() {
		const {
			loadMap,
			mapLoaded,
			mapToken,
			mapState,
			onChangeViewport,
			pois,
			isLogged,
		} = this.props
		return (
			<div className="map-container">
			{isLogged && 
			<MapGL
				{...mapState}
				mapStyle="mapbox://styles/mapbox/light-v9"
				showZoomControls={true}
				width={520}
				height={520}
				onLoad={loadMap}
				onError={(err) => console.log(err)}
				mapboxApiAccessToken={mapToken}
				onViewportChange={onChangeViewport}>
					{mapLoaded && pois.map(this._renderMarker)}
					{mapLoaded && this._renderPopup()}
			</MapGL>}
			</div>
		)
	}
}

export default Map
