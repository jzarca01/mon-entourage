import { connect } from 'react-redux'
import { onChangeViewport } from 'redux-map-gl'
import { loadMap } from '../../actions/map.actions'

import Map from './map.component'

function mapStateToProps(state) {
  return {
    mapLoaded: state.map.isLoaded,
    mapState: state.map.viewport.toJS(),
    pois: state.entourage.filterType ? state.entourage.feeds.filter(feed => feed.data.entourage_type === state.entourage.filterType && feed.data.status === 'open') : state.entourage.feeds.filter(feed => feed.data.status === 'open'),
    isLogged: state.entourage.isLogged
  }
}

const mapDispatchToProps = {
  onChangeViewport,
  loadMap
}

export default connect(mapStateToProps, mapDispatchToProps)(Map)