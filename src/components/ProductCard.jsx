import React from 'react'

const ProductCard = ({product}) => {
  const image = product.thumbnail;
  const title = product.title;
  const description = product.description;
  const price = product.price;
  
  return (
    <div className='productcard'>
      <div className="productcard__container">
        <span><img src={image} alt={description}/></span>
        <h3 className='productcard__title'>{title}</h3>
        <p className='productcard__price'>{'\u00a3'}{price}</p>
      </div>
    </div>
  )
}

export default ProductCard