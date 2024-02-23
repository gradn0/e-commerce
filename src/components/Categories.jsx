import SideBarLink from './UI/SideBarLink'
import { NavLink } from 'react-router-dom';
import useFetch from '../utils/useFetch';

const Categories = () => {
  const categories = useFetch('categories');

  return (
    <ul>
        {categories && categories.map(category => <NavLink key={category} to={`/category/${category}`}><SideBarLink label={category}/></NavLink>)}
    </ul>
  )
}

export default Categories