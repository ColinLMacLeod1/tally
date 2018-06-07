import React, { Component } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import {talliesRequest, profileRequest} from './actions'
import './styles.css'

class Tally extends Component {
  static propTypes = {
    talliesRequest: PropTypes.func,
    profileRequest: PropTypes.func,
    profile: PropTypes.shape({
      name: PropTypes.string,
    }),
    tallies: PropTypes.shape({
      tallies: PropTypes.array,
      talliesRequesting: PropTypes.bool,
      errors: PropTypes.array
    })
  }
  componentWillMount() {
    this.props.profileRequest(5)
  }
  render () {
    const {
      profile: { user, porfileRequesting,},
      tallies: {tallies,talliesRequesting, errors},
    } = this.props
    return(
    <div>
      <h4>Tally</h4>
      <h5>{user}</h5>
      {tallies.map((tally)=>(
        <h5>{tally}</h5>
      ))}
    </div>)
  }
}

const mapStateToProps = state =>({
  profile: state.profile,
  tallies: state.tallies,
})

const connected = connect(mapStateToProps, {talliesRequest,profileRequest})(Tally)

export default connected
