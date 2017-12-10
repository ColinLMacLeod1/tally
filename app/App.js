import React from 'react'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: 0
    }
  }

  render() {
    return (
      <div>
        {this.state.data}
      </div>
    )
  }
}
