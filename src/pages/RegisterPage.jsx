import React from 'react'
import { Link } from 'react-router-dom'
import {BASE_URL} from '../globalVars'

const RegisterPage = () => {
  return (
    <div className='register container'>
        <div className="register__pannel">
            <h2 className='text-heading'>Register an account</h2>
            <form action="">
                <input className='text-input' type="text" placeholder='Username'/>
                <input className='text-input' type="text" placeholder='Password'/>
                <button className='btn'>Sign up</button>
            </form>
            <Link to={`${BASE_URL}/login`} className='text-body'><p>Login</p></Link>
        </div>
    </div>
  )
}

export default RegisterPage