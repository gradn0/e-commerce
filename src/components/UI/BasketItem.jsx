import React from 'react'

const BasketItem = ({product, deleteItem, updateCount}) => {
    const item = product.product;
    const quantity = product.count;

    const validateInput = (input) => {
        for (let i=0; i<input.length; i++) {
            if (input[i].charCodeAt(0) < 48 || input[i].charCodeAt(0) > 57) {
                return;
            } 
        }  
        updateCount(Number(input));    
    }

  return (
    <div className='basketitem'>
        <div className='basketitem__image'>
            <img src={item.thumbnail} alt="" />
        </div>
        <div className='basketitem__details'>
            <h2>{item.title}</h2>
            <p>{'\u00a3'}{item.price}</p>
            <p onClick={deleteItem} className='basketitem__details-remove'>Delete</p>
        </div>
        <div className="basketitem__counter">
            <p>Quantity: </p>
            <input className='text-input' type="text"
                placeholder={quantity} 
                onChange={(e) => validateInput(e.target.value)}   
            />
        </div>
        
    </div>
  )
}

export default BasketItem