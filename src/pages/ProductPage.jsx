import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';
import ImageSlider from '../components/ImageSlider';
import AddToBasket from '../components/AddToBasket';

const ProductPage = () => {
    const params = useParams();
    const product = useFetch(params.productId);

    if (!product) return;

  return (
    <div className='productpage'>
        <div className="productpage__top">
          <ImageSlider product={product}/>
          <div className="productpage__info">
            <h1 className='text-heading'>{product.title}</h1>
            <p className='text-body'>{product.rating}/5 Stars</p>
            <p className='text-body'>{product.description}</p>
            <p className='text-heading'>{'\u00a3'}{product.price}</p>
            <AddToBasket product={product}/>
          </div>
        </div>
    </div>
  )
}

export default ProductPage