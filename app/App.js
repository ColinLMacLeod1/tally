import React from 'react'
import Header from './components/Header'
import ProfileC from './containers/ProfileC'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <Header />
        <ProfileC />
      </div>
    )
  }
}
