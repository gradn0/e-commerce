import React from 'react'
import Header from '../components/Header'


const MainLayout = ({
    left: Side, 
    right: Main,
}) => {
  return (
    <>
    <div style={{height: '12vh'}}>
        <Header />
    </div>   
    <div style={{display: 'flex', height: '88vh'}}>
        <div style={{flex: 1, overflowY: 'scroll'}}>
            <Side />
        </div>
        <div style={{flex: 4, padding: '2em', overflowY: 'scroll'}}>
            <Main />
        </div>
    </div>
    </>
  )
}

export default MainLayout