import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BasketItem from '../components/UI/BasketItem'
import { updateCount, removeProduct } from '../state/basket/basketSlice'
import CheckoutSummary from '../components/CheckoutSummary'

const BasketPage = () => {
    const products = useSelector((state) => state.basket.products);
    const totalCost = useSelector((state) => state.basket.totalCost);
    const dispatch = useDispatch();

  return (
    <div className="basketpage">
      <div className="basketpage__products">
        
        <h1 className='text-heading'>Your Basket</h1>
        <div className="basketpage__products-list">
          {products.map((item) => <BasketItem 
              key={item.product.id} 
              product={item}
              deleteItem={() => dispatch(removeProduct({item}))}
              updateCount={newCount => dispatch(updateCount({item, newCount}))}
          />)}
        </div>

      </div>
      <div className="basketpage__summary">
        <h1 className='text-heading'>Order Summary</h1>
        <CheckoutSummary totalCost={totalCost}/>
      </div>
    </div>
    
  )
}

export default BasketPage