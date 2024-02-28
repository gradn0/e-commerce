import { useEffect, useState } from "react";

const useFetch = (query) => {
    const BASE_URL = 'https://dummyjson.com/products/';
  
    const [data, setData] = useState(null);
  
    useEffect(() => {
      const fetchListing = async () => {
        const url = query !== undefined ? (BASE_URL + query) : BASE_URL;
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
      }
      fetchListing(); 
    }, [query]); 
  
    return data;
}

export default useFetch