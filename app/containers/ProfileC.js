import React from 'react'
import Profile from '../components/Profile'
import axios from 'axios'



export default class ProfileC extends React.Component{
  constructor(props){
    super(props)
    this.state={
      user:{}
    }
  }
  componentWillMount(){
    const self = this
    axios.get("http://localhost:3000/user").then((res)=>{
      console.log(res.data)
      self.setState({
        user: res.data
      })
    }).catch((err)=>{
      console.log(err)
    })

  }

  render(){
    return(
      <Profile user={this.state.user} />
    )
  }
}
