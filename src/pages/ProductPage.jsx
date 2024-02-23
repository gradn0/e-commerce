import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../utils/useFetch';

const ProductPage = () => {
    const params = useParams();
    const product = useFetch(params.productId);

    if (!product) return;

  return (
    <div className='productpage'>
        <div className="productpage__top">
            <div className="productpage__images">
                <img src={product.thumbnail} alt="" />
            </div>
            <div className="productpage__info">2</div>
        </div>
        <p className="productpage__description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum sint officiis iure labore eius alias quae deserunt cumque exercitationem! 
        Optio consequatur commodi libero perspiciatis quo voluptate tempora, fugiat ad porro.</p>
    </div>
  )
}

export default ProductPage