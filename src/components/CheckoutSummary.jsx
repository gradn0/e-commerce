import React from 'react'

const CheckoutSummary = ({totalCost}) => {
  return (
    <div className='checkoutsummary'>
        <p className='checkoutsummary__contribution'>Items: {'\u00a3'}{totalCost}</p>
        <p className='checkoutsummary__total'>Total: {'\u00a3'}{totalCost}</p>
        <button className='btn'>Place your order</button>
    </div>
  )
}

export default CheckoutSummary