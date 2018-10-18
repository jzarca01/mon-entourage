import { connect } from 'react-redux'
import { createInstance , getFeeds } from '../../actions/entourage.actions'

import Bot from './bot.component'

function mapStateToProps() {
  return {
  }
}

const mapDispatchToProps = {
  createInstance,
  getFeeds
}

export default connect(mapStateToProps, mapDispatchToProps)(Bot)