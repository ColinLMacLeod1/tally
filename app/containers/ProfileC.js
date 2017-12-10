import React from 'react'
import Profile from '../components/Profile'

export default class ProfileC extends React.Component{
  constructor(props){
    super(props)
    this.state={
      username:"Colin"
    }
  }

  render(){
    return(
      <Profile username={this.state.username} />
    )
  }
}
