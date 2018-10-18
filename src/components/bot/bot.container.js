import { connect } from 'react-redux'
import { createInstance , getFeeds } from '../../actions/entourage.actions'

import Bot from './bot.component'

function mapStateToProps(state) {
  return {
    isLogged: state.entourage.isLogged
  }
}

const mapDispatchToProps = {
  createInstance,
  getFeeds
}

export default connect(mapStateToProps, mapDispatchToProps)(Bot)