import React from 'react'
import { Link } from 'react-router-dom'
import {BASE_URL} from '../globalVars';

const ErrorBoundary = () => {
  return (
    <div>
        <h1>404 Page Not Found</h1>
        <Link to={`${BASE_URL}/`}><button>Home</button></Link>
    </div>
  )
}

export default ErrorBoundary