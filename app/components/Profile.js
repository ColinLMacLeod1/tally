import React from 'react'

const Profile = ({user}) => (
  <div className="profileWrapper">
    <div className="profileInfo">
      <img src={user.avatar_url} alt="profile pic" />
      <h1>{user.name}</h1>
      <h4>{user.login}</h4>
      <h3>Average ratio: 1.5</h3>
    </div>
  </div>
)

export default Profile
