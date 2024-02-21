import React from 'react'
import Header from '../components/Header'


const MainLayout = ({
    left: Side, 
    right: Main,
}) => {
  return (
    <>
        <Header />
        <div className='container' style={{display: 'flex'}}>
            <div style={{flex: 1}}>
                <Side />
            </div>
            <div style={{flex: 5}}>
                <Main />
            </div>
        </div>
    </>
  )
}

export default MainLayout