import React, { useEffect, useState } from 'react'
import SideBarLink from './UI/SideBarLink'
import { NavLink } from 'react-router-dom';
import fetchFromApi from '../utils/fetchFromApi';

const Categories = () => {
  const [categories, setCategories] = useState(() => []);
  useEffect(() => {
    const fetchCategories = async () => {
      fetchFromApi('categories')
        .then(data => setCategories(data));
    }
    fetchCategories();
  }, [])
  return (
    <ul>
        {categories.map(category => <NavLink style={{color: 'var(--clr-dark)'}} to={`/category/${category}`}><SideBarLink label={category}/></NavLink>)}
    </ul>
  )
}

export default Categories