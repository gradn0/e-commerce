import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BasketItem from '../components/UI/BasketItem'
import { removeProduct } from '../state/basket/basketSlice'

const BasketPage = () => {
    const products = useSelector((state) => state.basket.products);
    const dispatch = useDispatch();

  return (
    <div className='basketpage'>
        <div className="basketpage__products">
            {products.map((item) => <BasketItem 
              key={item.product.id} 
              product={item}
              deleteItem={() => dispatch(removeProduct({item}))}
            />)}
        </div>
        <div className="basketpage__summary"></div>
    </div>
  )
}

export default BasketPage