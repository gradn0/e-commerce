import React from 'react'

const PaymentOptions = () => {
  return (
    <form className='paymentoptions' action="">
      <div className="checkoutoptions__left">
        <label htmlFor="cardnum">Card Number</label>
        <input id='cardnum' type="text" className='text-input'/>

        <label htmlFor="cardname">Name on card</label>
        <input id='cardname' type="text" className='text-input'/>
      </div>

      <div className="checkoutoptions__right">
        <label htmlFor="expires">Expiration date</label>
        <input id='expires' type="text" className='text-input' placeholder='mm/yy'/>

        <label htmlFor="expires">Security Code</label>
        <input id='csv' type="text" className='text-input' placeholder='CVV/CVC'/>
      </div>
    </form>
  )
}

export default PaymentOptions