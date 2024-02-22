import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import fetchFromApi from '../utils/fetchFromApi';
import ProductCard from './ProductCard';

const Listing = () => {
  const params = useParams();
  const [listing, setListing] = useState(() => []);
  
  useEffect(() => {
    /* const fetchListing = async (query) => {
      const BASE_URL = 'https://fakestoreapi.com/products/';
      const url = query !== undefined ? (BASE_URL + query) : BASE_URL
      const response = await fetch(url);
      const json = await response.json();
      setListing(json);
    } */
    /* params.category !== undefined ? fetchListing(`category/${params.category}`) : fetchListing(); */
    const fetchListing = async () => {
      const data = params.category !== undefined ? await fetchFromApi(`category/${params.category}`) : await fetchFromApi();
      setListing(data);
      console.log(listing);
    }
    fetchListing();
  }, [params]); 
  
  return (
    <div className='layout-grid' style={{gap: '0.5em'}}>
      {listing.map((item => 
        <ProductCard image={item.image} title={item.title} description={item.description} price={item.price}/> 
      ))}  
    </div>
  )
}

export default Listing