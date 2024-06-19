import React, { useState } from 'react'
import Logo from './UI/Logo'
import SearchBar from './SearchBar'
import BasketIcon from './UI/BasketIcon'
import { Link } from 'react-router-dom'
import MobileMenuIcon from './UI/MobileMenuIcon'
import Media from 'react-media'
import SearchIcon from './UI/SearchIcon'
import ModalLayout from '../layouts/ModalLayout'

const Header = ({toggleSidebar, displayMobileMenu}) => {
  const [searchBarOpen, setSearchBarOpen] = useState(false);

  return (
    <div className='header'>
        {displayMobileMenu && <Media query='(max-width: 70em)' render={() => <a onClick={toggleSidebar}><MobileMenuIcon style={{width: '1.5em', height: '1.5em', cursor: 'pointer'}}/></a>}/>}
        <Link to={`/`}><Logo /></Link>

        {displayMobileMenu && <Media queries={{
            mobile: '(max-width: 592px)',
            desktop: '(min-width: 592px)',
        }}>
          {matches => (
              <>
                {matches.desktop && <SearchBar />}
                {!matches.desktop && <a onClick={() => setSearchBarOpen(!searchBarOpen)}><SearchIcon style={{width: '1.5em', height: '1.5em', cursor: 'pointer'}}/></a>}
              </>
          )}
        </Media>}

        {searchBarOpen && 
        <ModalLayout>
          <div className="mobile-searchbar-container">
            <div className="mobile-searchbar">
                <SearchBar linkClicked={() => setSearchBarOpen(false)}/>
              </div>
          </div>
        </ModalLayout>}

        <ul className='header__links' style={{display: 'flex', gap: '2em'}}>
          <Link to={`/basket`}><BasketIcon /></Link>
        </ul>

    </div>
  )
}

export default Header