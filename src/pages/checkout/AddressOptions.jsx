import React from 'react'

const AddressOptions = () => {
  return (
    <form className='addressoptions' action="">
      <div className="checkoutoptions__left">
        <label htmlFor="fullname">Full Name</label>
        <input id='fullname' type="text" className='text-input'/>

        <label htmlFor="phone">Phone Number</label>
        <input id='phone' type="text" className='text-input'/>

        <label htmlFor="postcode">Postcode</label>
        <input id='postcode' type="text" className='text-input'/>

        <label htmlFor="addressline1">Address Line 1</label>
        <input id='addressline1' type="text" className='text-input'/>
      </div>
      
      <div className="checkoutoptions__right">
        <label htmlFor="addressline2">Address Line 2 (optional)</label>
        <input id='addressline2' type="text" className='text-input'/>

        <label htmlFor="county">County</label>
        <input id='county' type="text" className='text-input'/>

        <label htmlFor="town-city">Town/City</label>
        <input id='town-city' type="text" className='text-input'/>
      </div>  
      
    </form>
  )
}

export default AddressOptions