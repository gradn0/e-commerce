import SideBarLink from './UI/SideBarLink'
import { NavLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {BASE_URL} from '../globalVars';

const Categories = () => {
  const categories = useFetch('categories');

  return (
    <ul>
        {categories && categories.map(category => <NavLink key={category} to={`${BASE_URL}/category/${category}`}><SideBarLink label={category}/></NavLink>)}
    </ul>
  )
}

export default Categories