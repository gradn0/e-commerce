import React from 'react'

const ModalLayout = ({children}) => {

  return (
    <div className='modallayout' style={{position: 'absolute', border: '1px solid var(--clr-300)', background: 'var(--clr-light)', zIndex: '5'}}>
        {children}
    </div>
  )
}

export default ModalLayout