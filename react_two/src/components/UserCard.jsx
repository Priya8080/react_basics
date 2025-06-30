import React from 'react'
import star from "../assets/star.jpg"
import "./UserCard.css"

const UserCard = (props) => {
  return (
    <div className='user-container'>
      <p id='user-name'>{props.name}</p>
      <img id='user-img' src={star} alt="Priya" />
      <p id='user-dec'>{props.desc}</p>
    </div>
  )
}

export default UserCard
