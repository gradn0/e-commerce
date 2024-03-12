import React from 'react'
import { Link } from 'react-router-dom'
import {BASE_URL} from '../globalVars';
import TickIcon from '../assets/tick.png';

const CheckoutSuccessPage = () => {
  return (
    <div className='checkoutsuccess | container'>
      <h1>Thank you for your order!</h1>
      <img src={TickIcon} width={100} height={100} alt="" />
      <Link to={`${BASE_URL}/`}><button className='btn'>Return to store</button></Link>
    </div>
  )
}

export default CheckoutSuccessPage