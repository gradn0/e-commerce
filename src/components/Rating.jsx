import React from 'react'
import RatingStar from './UI/RatingStar'

const Rating = ({rating}) => {
  return (
    <div style={{display: 'flex', flexDirection: 'column',  gap: '1em'}}>
        {[...Array(Math.floor(rating))].map((i) => <span key={i}></span>)}
    </div>
  )
}

export default Rating