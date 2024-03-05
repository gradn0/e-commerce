import React from 'react'
import Header from '../components/Header'

const MonoLayout = ({children}) => {
  return (
    <>
    <div style={{height: '12vh'}}>
        <Header displayMobileMenu={false}/>
    </div>   
    <div style={{display: 'flex', height: '88vh'}}>
        {children}
    </div>
    </>
  )
}

export default MonoLayout