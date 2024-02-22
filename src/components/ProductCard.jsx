import React from 'react'

const ProductCard = ({
    image,
    title,
    description,
    price,
}) => {
  return (
    <div className='productcard'>
        <img src={image} alt={description} />
        <h3 className='productcard__title'>{title}</h3>
        <p className='productcard__price'>{'\u00a3'}{price}</p>
    </div>
  )
}

export default ProductCard