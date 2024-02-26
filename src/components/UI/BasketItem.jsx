import React from 'react'

const BasketItem = ({product, deleteItem}) => {
    const item = product.product;
    const quantity = product.count;

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
            <p>Quantity: {quantity}</p>
        </div>
        
    </div>
  )
}

export default BasketItem