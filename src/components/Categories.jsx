import SideBarLink from './UI/SideBarLink'
import { NavLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const Categories = () => {
  const categories = useFetch('categories');
  return (
    <ul>
        {categories && categories.map(category => <NavLink key={category.slug} to={`/category/${category.slug}`}><SideBarLink label={category.name}/></NavLink>)}
    </ul>
  )
}

export default Categories