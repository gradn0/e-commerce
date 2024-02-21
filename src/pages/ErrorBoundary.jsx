import React from 'react'
import { Link } from 'react-router-dom'

const ErrorBoundary = () => {
  return (
    <div>
        <h1>404 Page Not Found</h1>
        <Link to='/'><button>Home</button></Link>
    </div>
  )
}

export default ErrorBoundary