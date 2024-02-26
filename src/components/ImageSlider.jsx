import React, { useState } from 'react'

const ImageSlider = ({product}) => {
    const images = product.images;

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handlClick = (imageIndex) => {
        if (currentImageIndex !== imageIndex){
            setCurrentImageIndex(imageIndex);
        }
    }

  return (
    <div className='imageslider'>
        <div className="imageslider__current">
            <img src={images[currentImageIndex]} alt="" />
        </div> 
        <ul className="imageslider__preview">
            {images.map(((image, i) => <li key={i} onClick={() => handlClick(i)}><img src={image}/></li>))}
        </ul>
    </div>
  )
}

export default ImageSlider