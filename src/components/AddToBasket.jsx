import React from 'react'
import Counter from './UI/Counter'
import { useDispatch, useSelector } from 'react-redux'
import { addProduct, incrementCount } from '../state/basket/basketSlice';

const AddToBasket = ({product}) => {

    const basket = useSelector(state => state.basket.products);
    const dispatch = useDispatch();

    const appendBasket = (count) => {
        if (basket.find((item) => item.product.id === product.id)) {
            dispatch(incrementCount({product, count}))
        }
        else {
            dispatch(addProduct({product, count}));
        }
    }

  return (
    <div>
        <Counter onRequestValue={count => appendBasket(count)} submit={true} submitText={'Add to Basket'}/>  
    </div>
  )
}

export default AddToBasket