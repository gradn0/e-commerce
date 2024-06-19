import React from 'react'
import CheckoutSummary from '../../components/CheckoutSummary'
import { useSelector } from 'react-redux'

const PlaceOrder = () => {
  const products = useSelector((state) => state.basket.products);
  const totalCost = useSelector((state) => state.basket.totalCost);
  return (
    <div>
      <CheckoutSummary totalCost={totalCost} handleSubmit={() => navigate(`/checkout`)}/>
    </div>
  )
}

export default PlaceOrder