import React from 'react'
import SideBarLink from './UI/SideBarLink'
import { NavLink } from 'react-router-dom';

const Categories = () => {
    const categories = [{name: 'music'}, {name: 'technology'}, {name: 'arts and crafts'}, {name: 'trending'}];
    console.log(categories);
  return (
    <ul>
        {categories.map(category => <NavLink style={{color: 'var(--clr-dark)'}} to={`/category/${category.name}`}><SideBarLink label={category.name}/></NavLink>)}
    </ul>
  )
}

export default Categories