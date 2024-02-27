import React from 'react'
import Logo from './UI/Logo'
import SearchBar from './SearchBar'
import ProfileIcon from './UI/ProfileIcon'
import BasketIcon from './UI/BasketIcon'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <Link to={'/'}><Logo /></Link>
        <SearchBar />
        <ul className='header__links' style={{display: 'flex', gap: '2em'}}>
          <ProfileIcon />
          <Link to={'/basket'}><BasketIcon /></Link>
        </ul>
    </div>
  )
}

export default Header