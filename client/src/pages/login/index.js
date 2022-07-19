import React from 'react'
import './login.css'

const Login = () => {
    return (
        <div className='view'>
            <div className='login-container'>
                <h1 className="login-title">After Dark</h1>
                <form className="login-form" action="/login" method="POST"> 
                    <label className='label-username'>Username</label>
                    <input className="input-username" type="text" name="username"/>
                    <label className='label-password'>Password</label>
                    <input className="input-password" type="text" name="password"/>
                    <button className="login-btn" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}
export default Login