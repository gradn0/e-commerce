import React, { useState } from 'react'
import useFetch from '../hooks/useFetch';
import ModalLayout from '../layouts/ModalLayout';
import { Link } from 'react-router-dom';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [displayResults, setDisplayResults] = useState(false);

  const data = useFetch(`search?q=${query}&limit=10`);
  const results = data ? data.products : null;

  const handleChange = (query) => {
    setQuery(query);
    setDisplayResults(true);
  }

  return (
    <div className='searchbar'>
        <input onChange={(e) => handleChange(e.target.value)} className='text-input' type="text" placeholder='Search Products'/>
        {query.length>0 && displayResults && (
        <div className='searchbar__results'>
          <ModalLayout>
            {results.map(item => <div className="searchbar__result"><Link onClick={() => {setDisplayResults(false)}} key={item.id} to={`/product/${item.id}`}>{item.title}</Link></div>)}
          </ModalLayout>
        </div>
        )}
    </div>
  )
}

export default SearchBar