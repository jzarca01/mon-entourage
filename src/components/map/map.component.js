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

	_renderPopup(token) {
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
			mapToken,
			mapState,
			onChangeViewport,
			pois
		} = this.props
		return (
			<MapGL
				{...mapState}
				showZoomControls={true}
				width={520}
				height={520}
				mapboxApiAccessToken={mapToken}
				onViewportChange={onChangeViewport}>
				{pois.map(this._renderMarker)}
				{this._renderPopup()}
			</MapGL>
		)
	}
}

export default Map
