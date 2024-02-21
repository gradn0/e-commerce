import React from 'react'
import Logo from './UI/Logo'
import SearchBar from './UI/SearchBar'
import {ProfileIcon} from './UI/ProfileIcon'

const Header = () => {
  return (
    <div className='header'>
        <Logo />
        <SearchBar />
        <ul className='header__links'>
          <ProfileIcon />
        </ul>
    </div>
  )
}

export default Header