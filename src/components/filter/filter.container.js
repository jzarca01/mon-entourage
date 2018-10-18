import { connect } from 'react-redux'
import { filterFeeds, resetFilter } from '../../actions/filter.actions'

import Filter from './filter.component'

function mapStateToProps() {
  return {}
}

const mapDispatchToProps = {
  filterFeeds,
  resetFilter
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter)