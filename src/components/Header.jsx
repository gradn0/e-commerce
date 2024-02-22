import React from 'react'
import Logo from './UI/Logo'
import SearchBar from './UI/SearchBar'
import ProfileIcon from './UI/ProfileIcon'
import BasketIcon from './UI/BasketIcon'

const Header = () => {
  return (
    <div className='header'>
        <Logo />
        <SearchBar />
        <ul className='header__links' style={{display: 'flex', gap: '2em'}}>
          <ProfileIcon />
          <BasketIcon />
        </ul>
    </div>
  )
}

export default Header