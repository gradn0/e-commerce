import React from 'react'
import { useParams } from 'react-router-dom'

const Listings = () => {
    const params = useParams();
  return (
    <div>
        {params.category ? <h1>Listings for {params.category}</h1> : <h1>Listings</h1>}
    </div>
  )
}

export default Listings