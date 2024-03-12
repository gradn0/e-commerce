import React from 'react'
import { Link } from 'react-router-dom'
import {BASE_URL} from '../globalVars';

const LoginPage = () => {
  return (
    <div className='login container'>
        <div className="login__pannel">
            <h2 className='text-heading'>Sign In</h2>
            <form action="">
                <input className='text-input' type="text" placeholder='Username'/>
                <input className='text-input' type="text" placeholder='Password'/>
                <button className='btn'>Login</button>
            </form>
            <Link to={`${BASE_URL}/register`} className='text-body'><p>Register an account</p></Link>
        </div>
    </div>
  )
}

export default LoginPage