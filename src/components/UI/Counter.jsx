import React, { useState } from 'react'

const Counter = ({onRequestValue, submit, submitText, defaultValue}) => {
    const [count, setCount] = useState(defaultValue);

    const increment = () => {
        setCount((prev) => prev+1);
    }

    const decrement = () => {
        if (count > 0) setCount(prev => prev-1);
    }

    const handleSubmit = () => {
      onRequestValue(count);
      setCount(defaultValue);
    }

  return (
    <>
    <div className='purchasecount'>
        <button onClick={decrement}>-</button>
        <span className="seperator"></span>
        <span className="count">{count}</span>
        <span className="seperator"></span>
        <button onClick={increment}>+</button>
    </div>
    {submit && <button style={{marginTop: '1em'}} className='btn' onClick={() => handleSubmit()}>{submitText}</button>}
    </>
  )
}

export default Counter