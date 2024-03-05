import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BasketItem from '../components/UI/BasketItem'
import { updateCount, removeProduct } from '../state/basket/basketSlice'
import CheckoutSummary from '../components/CheckoutSummary'
import { useNavigate } from 'react-router-dom'

const BasketPage = () => {
    const products = useSelector((state) => state.basket.products);
    const totalCost = useSelector((state) => state.basket.totalCost);
    const dispatch = useDispatch();
    const navigate = useNavigate();

  return (
    <div className="basketpage | container">
      <h1 className='text-heading'>Your Basket</h1>
      <div className="basketpage-grid">
        <div className="basketpage__products">
          <div className="basketpage__products-list">
            {products.length === 0 && <p>Basket is empty!</p>}
            {products.map((item) => <BasketItem 
                key={item.product.id} 
                product={item}
                deleteItem={() => dispatch(removeProduct({item}))}
                updateCount={newCount => dispatch(updateCount({item, newCount}))}
            />)}
          </div>

        </div>
        <div className="basketpage__summary">
          <CheckoutSummary totalCost={totalCost}/>
          <button onClick={() => navigate('/checkout')} className='btn'>Checkout</button>
        </div>
      </div>
    </div>
    
  )
}

export default BasketPage