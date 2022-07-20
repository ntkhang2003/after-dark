import React, { useState, useRef } from 'react'
import './login.css'
import axios from 'axios'

const Login = ({myStorage}) => {
    const userRef = useRef()
    const passwordRef = useRef()
    const [error, setError] = useState(false)
    const handleSubmit = async (e) => {
        e.preventDefault()
        setError(false)
        try {
            const res = await axios.post("/api/users/login", {
                userName: userRef.current.value,
                password: passwordRef.current.value,
            })
            myStorage.setItem('userName', res.data.userName)
            myStorage.setItem('userRole', res.data.role)
            if (res.data.role === 'Admin') {
                window.location.replace('/admin')
            } else if (res.data.role === 'User') {
                window.location.replace('/user')
            }
        } catch (err) {
            setError(true)
        }
    }
    return (
        <div className='view'>
            <div className='login-container'>
                <h1 className="login-title">After Dark</h1>
                <form className="login-form" onSubmit={handleSubmit}> 
                    <label className='label-username'>Username</label>
                    <input className="input-username" type="text" name="username" required ref={userRef}/>
                    <label className='label-password'>Password</label>
                    <input className="input-password" type="password" name="password" required ref={passwordRef}/>
                    {error && <p className='login-error'>Wrong password or username</p>}
                    <button className="login-btn" type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login